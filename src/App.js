import Navigation from "./pages/Navigation";
import {Outlet} from 'react-router-dom'
import Footer from "./pages/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../src/sass/fonts.scss"


export default function App() {

    return (
        <>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </>
    );
}