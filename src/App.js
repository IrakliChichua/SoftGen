import Navigation from "./pages/Navigation";
import {Outlet} from 'react-router-dom'
import Footer from "./pages/Footer";

export default function App() {

    return (
        <>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </>
    );
}