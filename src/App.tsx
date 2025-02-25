import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  NavLink,
} from "react-router-dom";
import style from "./App.module.scss";
import webLogo from "./assets/Ellipse 2.png";

import StronaGlowna from "./components/StronaGlowna/StronaGlowna";
import Okregowa_IVLiga from "./components/Okregowa_IVLiga/Okregowa_IVLiga";
import LigaIII_I from "./components/LigaIII_I/LigaIII_I";
import Ekstraklasa from "./components/Ekstraklasa/Ekstraklasa";
import ZasadyTestow from "./components/ZasadyTestow/ZasadyTestow";
import NotFound from "./components/NotFound/NotFound";

import home from "./assets/material-symbols_home-outline.png";
import flag from "./assets/flowbite_flag-outline.png";
import tshirt from "./assets/la_tshirt.png";
import ball from "./assets/fluent_sport-soccer-20-regular.png";
import pitch from "./assets/lucide-lab_soccer-pitch.png";
import rule from "./assets/material-symbols-light_rule.png";
import KlasaB_A from "./components/KlasaB_A/KlasaB_A";

import zebatka from "./assets/weui_setting-outlined.png";

const RootLayout = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.head}>
          <img className={style.image} src={webLogo} alt="Logo" />
          <h1>
            <b className={style.bold}>Sędziowskie</b> Testy Kondycyjne
          </h1>
        </div>
      </header>
      <main className={style.main}>
        <nav className={style.leftBar}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : style.link
            }
          >
            <img src={home} alt="Domek" />
            <p>Strona Główna</p>
          </NavLink>
          <NavLink
            to="/klasa-b-a"
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : style.link
            }
          >
            <img src={flag} alt="Flaga" />
            <p>Klasa B-A</p>
          </NavLink>
          <NavLink
            to="/okregowa-IV-liga"
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : style.link
            }
          >
            <img src={tshirt} alt="T-Shirt" />
            <p>Okręgowa-IV Liga</p>
          </NavLink>
          <NavLink
            to="/liga-III-I"
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : style.link
            }
          >
            <img src={ball} alt="Piłka" />
            <p>Liga III-I</p>
          </NavLink>
          <NavLink
            to="/ekstraklasa"
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : style.link
            }
          >
            <img src={pitch} alt="Boisko" />
            <p>Ekstraklasa</p>
          </NavLink>
          <NavLink
            to="/zasady-testow"
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : style.link
            }
          >
            <img src={rule} alt="Zasady" />
            <p>Zasady Testów</p>
          </NavLink>
          <div className={style.link}>
            <img src={zebatka} alt="Zębatka" />
            <p>2025 &copy; Matex Development</p>
          </div>
        </nav>
        <div className={style.content}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <StronaGlowna /> },
      { path: "/klasa-b-a", element: <KlasaB_A /> },
      { path: "/okregowa-IV-liga", element: <Okregowa_IVLiga /> },
      { path: "/liga-III-I", element: <LigaIII_I /> },
      { path: "/ekstraklasa", element: <Ekstraklasa /> },
      { path: "/zasady-testow", element: <ZasadyTestow /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
