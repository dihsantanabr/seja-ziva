import GreemyPage from './pages/GreemyPage';
import Home from './pages/Home';
import __Layout from './Layout.jsx';


export const PAGES = {
    "GreemyPage": GreemyPage,
    "Home": Home,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};