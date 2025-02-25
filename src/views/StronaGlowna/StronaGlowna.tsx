import style from "./StronaGlowna.module.scss";
import headerImage from "../../assets/material-symbols_home-outline.png";
import tips from "../../assets/ic_outline-tips-and-updates.png";
import audio from "../../assets/ph_file-audio.png";
import exam from "../../assets/healthicons_i-exam-multiple-choice-outline.png";
import rule from "../../assets//carbon_rule-test.png";
export default function StronaGlowna() {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <h3>
          <img src={headerImage} alt="Domek" />
          Strona Główna
        </h3>
      </header>
      <main className={style.main}>
        <p className={style.text}>
          <br />
          <br />
          <b className={style.bold}>Sędziowskie</b> Testy Kondycyjne – Jedyna
          Taka Strona! <br />
          Witaj na jedynej w Polsce stronie poświęconej testom kondycyjnym dla
          sędziów piłkarskich! Nasza platforma to kompleksowe źródło wiedzy dla
          arbitrów, którzy chcą skutecznie przygotować się do oficjalnych
          sprawdzianów wytrzymałościowych i szybkościowych.
          <br />
          <br />
          💪 <b className={style.bold}>Co znajdziesz na stronie?</b>
          <br />
          <br />
          <br />
        </p>
        <div className={style.box}>
          <div className={style.box1}>
            <img src={tips} alt="zarówka" />
            <p> Wskazówki dla sędziów na każdym poziomie rozgrywek</p>
          </div>
          <div className={style.box2}>
            <img src={audio} alt="Audio" />
            <p>Audio i materiały edukacyjne pomagające poprawić wyniki</p>
          </div>
          <div className={style.box3}>
            <img src={exam} alt="Egzamin" />
            <p>Aktualne normy i wytyczne dotyczące testów</p>
          </div>
          <div className={style.box4}>
            <img src={rule} alt="Zasady" />
            <p>Opisy i zasady testów kondycyjnych FIFA, UEFA i PZPN</p>
          </div>
        </div>
        <p className={style.text}>
          <br />
          <br />
          <br />
          🎯 <b className={style.bold}>Dla kogo jest ta strona?</b> <br />
          Dla każdego sędziego piłkarskiego – od początkujących po arbitrów
          szczebla centralnego, którzy chcą poprawić formę i pewnie zaliczyć
          testy. <br />
          <br />
          <br /> 🔥<b className={style.bold}>Dlaczego warto?</b> <br />
          Bo to jedyna strona w całości dedykowana kondycyjnemu przygotowaniu
          sędziów piłkarskich. Dzięki naszym materiałom zyskasz przewagę i
          podejdziesz do testów z pewnością siebie! <br />
          <br />
          <br /> 👉
          <b className={style.bold}>
            Sprawdź teraz i zacznij trenować jak zawodowiec!
          </b>
          <br />
          <br />
          <br />
          <br />
          <b className={style.bold}>Wymagania:</b>
          <br />
          <br />
        </p>
        <div className={style.table}>
          <table>
            <tr>
              <th>Klasa rozgrywkowa</th>
              <th>Czas na 75m biegu</th>
              <th>Czas na 25m marszu</th>
            </tr>
            <tr>
              <td>Klasa B-A</td>
              <td>17 sekund</td>
              <td>24 sekundy</td>
            </tr>
            <tr>
              <td>Okręgowa-IV Liga</td>
              <td>15 sekund</td>
              <td>20 sekund</td>
            </tr>
            <tr>
              <td>III-I Liga</td>
              <td>15 sekund</td>
              <td>18 sekund</td>
            </tr>
            <tr>
              <td>Ekstraklasa</td>
              <td>15 sekund</td>
              <td>18 sekund</td>
            </tr>
          </table>
        </div>
        <br />
        <br /> <br /> <br />
        <a
          href="NowyTestFIFA2016.pdf"
          download="NowyTestFIFA2016.pdf"
          className={style.bold}
        >
          Link do regulaminu testu
        </a>
        <br />
        <br />
      </main>
    </div>
  );
}
