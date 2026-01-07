import Home from './pages/Home';
import HomeCopy from './pages/HomeCopy';
import LP1 from './pages/LP1';
import LinkBio from './pages/LinkBio';
import Quiz from './pages/Quiz';
import QuizCRM from './pages/QuizCRM';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "HomeCopy": HomeCopy,
    "LP1": LP1,
    "LinkBio": LinkBio,
    "Quiz": Quiz,
    "QuizCRM": QuizCRM,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};