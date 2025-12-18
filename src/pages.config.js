import ProductPage from './pages/ProductPage';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import __Layout from './Layout.jsx';


export const PAGES = {
    "ProductPage": ProductPage,
    "LandingPage": LandingPage,
    "Home": Home,
}

export const pagesConfig = {
    mainPage: "ProductPage",
    Pages: PAGES,
    Layout: __Layout,
};