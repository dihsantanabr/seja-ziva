import GreemyPage from './pages/GreemyPage';
import GrupoVIP from './pages/GrupoVIP';
import Home from './pages/Home';
import LP from './pages/LP';
import __Layout from './Layout.jsx';


export const PAGES = {
    "GreemyPage": GreemyPage,
    "GrupoVIP": GrupoVIP,
    "Home": Home,
    "LP": LP,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};