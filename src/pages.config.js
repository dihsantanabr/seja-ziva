import Home from './pages/Home';
import HomeCopy from './pages/HomeCopy';
import LinkBio from './pages/LinkBio';
import Quiz from './pages/Quiz';
import QuizCRM from './pages/QuizCRM';
import Flacidez from './pages/Flacidez';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "HomeCopy": HomeCopy,
    "LinkBio": LinkBio,
    "Quiz": Quiz,
    "QuizCRM": QuizCRM,
    "Flacidez": Flacidez,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};