import Colageno from './pages/Colageno';
import Home from './pages/Home';
import LinkBio from './pages/LinkBio';
import Quiz from './pages/Quiz';
import QuizCRM from './pages/QuizCRM';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Colageno": Colageno,
    "Home": Home,
    "LinkBio": LinkBio,
    "Quiz": Quiz,
    "QuizCRM": QuizCRM,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};