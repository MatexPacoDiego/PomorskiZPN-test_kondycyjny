import style from "../../App.module.scss";
import webLogo from "../../assets/Ellipse 2.png";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.head}>
                <img className={style.image} src={webLogo} alt="Logo" />
                <h1>
                    <b className={style.bold}>Sędziowskie</b> Testy Kondycyjne
                </h1>
            </div>
        </header>
    )
}

export default Header;