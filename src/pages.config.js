import Home from './pages/Home';
import LinkBio from './pages/LinkBio';
import Quiz from './pages/Quiz';
import QuizCRM from './pages/QuizCRM';
import LP1 from './pages/LP1';
import HomeCopy from './pages/HomeCopy';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "LinkBio": LinkBio,
    "Quiz": Quiz,
    "QuizCRM": QuizCRM,
    "LP1": LP1,
    "HomeCopy": HomeCopy,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};