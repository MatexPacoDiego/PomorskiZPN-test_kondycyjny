import style from "../../App.module.scss";
import {NavLink} from "react-router-dom";
import home from "../../assets/material-symbols_home-outline.png";
import flag from "../../assets/flowbite_flag-outline.png";
import tshirt from "../../assets/la_tshirt.png";
import ball from "../../assets/fluent_sport-soccer-20-regular.png";
import pitch from "../../assets/lucide-lab_soccer-pitch.png";
import rule from "../../assets/material-symbols-light_rule.png";
import zebatka from "../../assets/weui_setting-outlined.png";

const Nav = () => {
    return (
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
    )
}

export default Nav;