import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Alert} from "react-bootstrap";
import App from "./App";
import Home from "./Home";


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='*' element={<Alert variant="danger"> 404 page not found</Alert>}/>
            </Route>
        </Routes>
    </BrowserRouter>,

    document.getElementById('root')
);

