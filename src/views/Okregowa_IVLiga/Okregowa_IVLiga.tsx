import style from "./Okregowa_IVLiga.module.scss";
import headerImage from "../../assets/la_tshirt.png";
import {useRef, useState} from "react";
import gwizdek from "../../assets/_pl_sound_gwizdek-sedziego_.mp3";
import beep from "../../assets/beep-07a.mp3";
import boisko from "../../assets/boisko_sedzia 1.png";

export default function Okregowa_IVLiga() {
  const runningRef = useRef<boolean>(false);
  const beepRef = useRef<HTMLAudioElement | null>(null);
  const gwizdekRef = useRef<HTMLAudioElement | null>(null);
  const wynikRef = useRef<HTMLSpanElement | null>(null);
  const [laps, setLaps] = useState<number>(0);

  const playBeep = () => {
    return new Promise<void>((resolve) => {
      if (beepRef.current) {
        beepRef.current.currentTime = 0;
        beepRef.current.play();
        beepRef.current.onended = () => resolve();
      } else {
        resolve();
      }
    });
  };

  const playDoubleBeep = async () => {
    if (beepRef.current) {
      beepRef.current.currentTime = 0;
      beepRef.current.play();

      await new Promise((r) => setTimeout(r, 300));

      beepRef.current.currentTime = 0;
      beepRef.current.play();
    }
  };

  const playGwizdek = () => {
    return new Promise<void>((resolve) => {
      if (gwizdekRef.current) {
        gwizdekRef.current.currentTime = 0;
        gwizdekRef.current.play();
        gwizdekRef.current.onended = () => resolve();
      } else {
        resolve();
      }
    });
  };

  const stopTest = () => {
    runningRef.current = false;
  };

  const startTest = async () => {
    runningRef.current = true;
    setLaps(0);

    for (let i = 3; i <= 40; i++) {
      if (!runningRef.current) return;

      if (i % 4 === 0 && i !== 0) {
        setLaps((prev) => prev + 1);
      }
      for (let j = 1; j <= 35; j++) {
        if (!runningRef.current) return;

        if (j === 10 || j === 30) {
          await playDoubleBeep();
        } else if (j === 1 || j === 15) {
          await playGwizdek();
        } else if (j === 5 || j === 25) {
          await playBeep();
        }

        await new Promise((r) => setTimeout(r, 1000));
      }
    }
  };

  return (
    <div className={style.container}>
      <header className={style.header}>
        <h3>
          <img src={headerImage} alt="T-Shirt" />
          Okręgowa-IV Liga
        </h3>
        <main className={style.main}>
          <br />
          <br />
          <div className={style.table}>
            <table>
              <tr>
                <th>Klasa rozgrywkowa</th>
                <th>Czas na 75m biegu</th>
                <th>Czas na 25m marszu</th>
              </tr>

              <tr>
                <td>Okręgowa-IV Liga</td>
                <td>15 sekund</td>
                <td>20 sekund</td>
              </tr>
            </table>
          </div>
          <br />
          <br />
          <br />
          <h2 className={style.trening}>
            Rozpocznij <b className={style.bold}>Sędziowski</b> Test Kondycyjny
            Dla Sedziego <b className={style.bold}>Okręgówki</b> oraz{" "}
            <b className={style.bold}>IV Ligi</b>
          </h2>
          <br />
          <br />
          <div className={style.buttons}>
            <button onClick={startTest}>START</button>
            <button onClick={stopTest} className={style.button}>
              STOP
            </button>
          </div>
          <audio ref={gwizdekRef} src={gwizdek} preload="auto" />
          <audio ref={beepRef} src={beep} preload="auto" /> <br />
          <div className={style.liczba}>
            <p className={style.tekst}>
              Liczba okrążeń:{" "}
              <span className={style.bold} ref={wynikRef}>
                {laps}
              </span>
            </p>
          </div>{" "}
          <br />
          <br />
          <div className={style.liczba}>
            <p className={style.tekst}>
              <b className={style.bold}>UWAGA!</b> <br />
              Na początku usłyszysz pojedynczy gwizdek oznaczający rozpoczęcie
              <b className={style.bold}> 75m </b>
              biegu. Następnie usłyszysz pojedyńczy beep oznaczający że do końca
              biegu zostało <b className={style.bold}>10s</b>, jeśli do końca
              biegu zostanie<b className={style.bold}> 5s</b> usłyszysz podwójny
              beep. Po upływie<b className={style.bold}> 15s </b>usłyszysz
              gwizdek kończący bieg i rozpoczynający{" "}
              <b className={style.bold}>25m</b> marszu przez{" "}
              <b className={style.bold}>20s</b>. Zasada dźwiękowa jest taka sama
              jak podczas biegu. Cały test to{" "}
              <b className={style.bold}>40 powtórzeń</b>, czyli{" "}
              <b className={style.bold}>10 kółek.</b>{" "}
            </p>
          </div>
          <br />
          <br />
          <br />
          <div className={style.liczba}>
            <p className={style.tekst}>
              *Pod spodem przedstawiono grafikę podzielonego na strefy boiska do
              tego testu
            </p>
          </div>
          <br />
          <br />
          <div className={style.liczba}>
            <img className={style.tekst} src={boisko} alt="boisko" />
          </div>
          <br />
          <br /> <br /> <br />
          <div className={style.liczba}>
            <a
              href="NowyTestFIFA2016.pdf"
              download="NowyTestFIFA2016.pdf"
              className={style.tekst}
            >
              Link do regulaminu testu
            </a>
          </div>
          <br />
          <br />
        </main>
      </header>
    </div>
  );
}
