import Colageno from './pages/Colageno';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import LinkBio from './pages/LinkBio';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Colageno": Colageno,
    "Home": Home,
    "Quiz": Quiz,
    "LinkBio": LinkBio,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};