import {createBrowserRouter} from "react-router-dom";
import StronaGlowna from "../views/StronaGlowna/StronaGlowna.tsx";
import KlasaB_A from "../views/KlasaB_A/KlasaB_A.tsx";
import Okregowa_IVLiga from "../views/Okregowa_IVLiga/Okregowa_IVLiga.tsx";
import LigaIII_I from "../views/LigaIII_I/LigaIII_I.tsx";
import Ekstraklasa from "../views/Ekstraklasa/Ekstraklasa.tsx";
import ZasadyTestow from "../views/ZasadyTestow/ZasadyTestow.tsx";
import NotFound from "../views/NotFound/NotFound.tsx";
import RootLayout from "../layouts/RootLayout.tsx";

export const router = createBrowserRouter([
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
