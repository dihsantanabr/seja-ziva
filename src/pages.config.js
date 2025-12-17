import ProductPage from './pages/ProductPage';
import LandingPage from './pages/LandingPage';
import __Layout from './Layout.jsx';


export const PAGES = {
    "ProductPage": ProductPage,
    "LandingPage": LandingPage,
}

export const pagesConfig = {
    mainPage: "ProductPage",
    Pages: PAGES,
    Layout: __Layout,
};