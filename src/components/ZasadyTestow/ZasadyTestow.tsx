import style from "./ZasadyTestow.module.scss";
import headerImage from "../../assets/material-symbols-light_rule.png";

export default function ZasadyTestow() {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <h3>
          <img src={headerImage} alt="Domek" />
          Zasady Testów
        </h3>
      </header>
      <main className={style.main}>
        <p className={style.text}>
          <br />
          <br />
          <b className={style.bold}>Główne Informacje</b> dotyczące{" "}
          <b className={style.bold}>Sędziowskiego</b> Testu Kondycyjnego: <br />
          <br />
          ✅ Sędziowie pokonują wyznaczony dystans w interwale: 75 m bieg z
          wysoką intensywnością oraz 25 m marsz. <br />✅ Tempo jest regulowane
          przez pliki dźwiękowe audio, które odpowiadają kategorii sędziego.{" "}
          <br />✅ Sędziowie muszą startować z pozycji stojącej. <br />✅
          Sędziom nie wolno startować przed sygnałem gwizdka.
          <br />
          <br />
          <br />
          <br />
          <b className={style.bold}>Główne Zasady</b> dotyczące{" "}
          <b className={style.bold}>Sędziowskiego</b> Testu Kondycyjnego: <br />
          <br />
          ✅ Na końcu każdej strefy biegu, każdy sędzia musi wbiec w „strefę
          chodu” przed dźwiękiem sygnału gwizdka. <br />✅ Strefa chodu
          zaznaczona jest pachołkiem znajdującym się 1,5 m przed i 1,5 m za
          linią 75 m. <br /> ✅ Jeżeli sędzia nie zdąży postawić stopy w strefie
          chodu przed sygnałem, otrzyma ostrzeżenie od egzaminatora. <br />✅
          Jeżeli sędzia po raz drugi nie zdąży postawić stopy w strefie chodu
          przed sygnałem gwizdka, egzaminator wyklucza takiego sędziego z
          dalszego biegu i informuje go o niezaliczeniu testu.
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
        <p className={style.text}>
          <b className={style.bold}>Protokół Testu:</b> <br />
          <ul>
            <li>️Rozgrzewka</li>
            <li>6x40m</li>
            <li>Przerwa 6min-8min</li>
            <li>Test Interwałowy</li>
            <li>Rozbieganie</li>
          </ul>
        </p>
        <br />
        <br />
      </main>
    </div>
  );
}
