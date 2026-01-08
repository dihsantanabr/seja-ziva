import Flacidez from './pages/Flacidez';
import Home from './pages/Home';
import HomeCopy from './pages/HomeCopy';
import LinkBio from './pages/LinkBio';
import Quiz from './pages/Quiz';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Flacidez": Flacidez,
    "Home": Home,
    "HomeCopy": HomeCopy,
    "LinkBio": LinkBio,
    "Quiz": Quiz,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};