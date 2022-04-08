import React, {useState} from 'react';
import "./home.css"
import bgi from "./images/bgi.png"
import dots from "./images/dots.svg"
import left from "./images/left.png"
import right from "./images/right.png"
import {render} from "react-dom";
import {Carousel} from "react-bootstrap";


function Home(props) {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bgi}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bgi}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bgi}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );

}

export default Home;