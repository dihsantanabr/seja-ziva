import ProductPage from './pages/ProductPage';
import LandingPage from './pages/LandingPage';
import GreemyPage from './pages/GreemyPage';
import __Layout from './Layout.jsx';


export const PAGES = {
    "ProductPage": ProductPage,
    "LandingPage": LandingPage,
    "GreemyPage": GreemyPage,
}

export const pagesConfig = {
    mainPage: "ProductPage",
    Pages: PAGES,
    Layout: __Layout,
};