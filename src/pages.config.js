import GrupoVIP from './pages/GrupoVIP';
import Home from './pages/Home';
import LP from './pages/LP';
import Colageno from './pages/Colageno';
import __Layout from './Layout.jsx';


export const PAGES = {
    "GrupoVIP": GrupoVIP,
    "Home": Home,
    "LP": LP,
    "Colageno": Colageno,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};