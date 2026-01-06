import Home from './pages/Home';
import Colageno from './pages/Colageno';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Colageno": Colageno,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};