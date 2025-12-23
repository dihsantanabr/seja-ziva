import ExtratoLactacao from './pages/ExtratoLactacao';
import GreemyPage from './pages/GreemyPage';
import Home from './pages/Home';
import __Layout from './Layout.jsx';


export const PAGES = {
    "ExtratoLactacao": ExtratoLactacao,
    "GreemyPage": GreemyPage,
    "Home": Home,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};