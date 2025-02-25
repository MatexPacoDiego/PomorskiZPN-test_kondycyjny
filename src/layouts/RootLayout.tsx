import style from "../App.module.scss";

import {Outlet} from "react-router-dom";

import Nav from "../components/Nav/Nav.tsx";
import Header from "../components/Header/Header.tsx";

const RootLayout = () => {
    return (
        <div className={style.container}>
            <Header />
            <main className={style.main}>
                <Nav />
                <div className={style.content}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default RootLayout;