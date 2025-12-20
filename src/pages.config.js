import Home from './pages/Home';
import GreemyPage from './pages/GreemyPage';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "GreemyPage": GreemyPage,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};