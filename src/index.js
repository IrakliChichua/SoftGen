import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Alert} from "react-bootstrap";
import App from "./App";
import Home from "./pages/home/Home";
import News from "./pages/news/News";


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='*' element={<Alert variant="danger"> 404 page not found</Alert>}/>
            </Route>
        </Routes>
    </BrowserRouter>,

    document.getElementById('root')
);

