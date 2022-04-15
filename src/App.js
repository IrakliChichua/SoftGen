import Navigation from "./Navigation";
import {Outlet} from 'react-router-dom'
import Footer from "./Footer";

export default function App() {

    return (
        <>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </>
    );
}