import ProductPage from './pages/ProductPage';
import __Layout from './Layout.jsx';


export const PAGES = {
    "ProductPage": ProductPage,
}

export const pagesConfig = {
    mainPage: "ProductPage",
    Pages: PAGES,
    Layout: __Layout,
};