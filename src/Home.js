import React from 'react';
import "./home.css"
import bgi from "./images/bgi.png"
import dots from "./images/dots.svg"
import left from "./images/left.png"
import right from "./images/right.png"

function Home(props) {
    return (
        <div className={"top-main"}>

        </div>

/*
        <div className="container">
            <h2>Carousel Example</h2>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"/>
                    <li data-target="#myCarousel" data-slide-to="1"/>
                    <li data-target="#myCarousel" data-slide-to="2"/>
                </ol>

                <div className="carousel-inner">

                    <div className="item active">
                        <img src={bgi} alt="Los Angeles" style="width:100%;"/>
                        <div className="carousel-caption">
                            <h3>Los Angeles</h3>
                            <p>LA is always so much fun!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img src={bgi} alt="Chicago" style="width:100%;"/>
                        <div className="carousel-caption">
                            <h3>Chicago</h3>
                            <p>Thank you, Chicago!</p>
                        </div>
                    </div>

                    <div className="item">
                        <img src={bgi} alt="New York" style="width:100%;"/>
                        <div className="carousel-caption">
                            <h3>New York</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>

                </div>

                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"/>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"/>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>*/
    );
}

export default Home;