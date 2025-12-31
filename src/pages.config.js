import GreemyPage from './pages/GreemyPage';
import Home from './pages/Home';
import LP from './pages/LP';
import GrupoVIP from './pages/GrupoVIP';
import __Layout from './Layout.jsx';


export const PAGES = {
    "GreemyPage": GreemyPage,
    "Home": Home,
    "LP": LP,
    "GrupoVIP": GrupoVIP,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};