import React from 'react';
import "./home.scss"
import {Carousel} from "react-bootstrap";
import bgi from "./images/bgi.png"
import directions_car_filled from "./images/directions_car_filled.svg"
import flight_takeoff from "./images/flight_takeoff.svg"
import health_and_safety from "./images/health_and_safety.svg"
import how_to_reg from "./images/how_to_reg.svg"
import property_insurance from "./images/property_insurance.svg"

import dots from "./images/dots.svg"


function Home(props) {
    return (
        <div>
            <div className={'background-gradient'}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bgi}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>ქონების დაზღვევა</h3>
                            <p>ყველაზე ხელსაყრელი პირობით</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bgi}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>ქონების დაზღვევა</h3>
                            <p>ყველაზე ხელსაყრელი პირობით</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bgi}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>ქონების დაზღვევა</h3>
                            <p>ყველაზე ხელსაყრელი პირობით</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className={'red-line'}> </div>
            <div className={'insurance-box'}>
                <div className={'cards-row'}>
                    <div className={'card-body'}>
                        <img src={property_insurance} style={{width: 48}} alt=""/>
                        <div> ქონების დაზღვევა</div>
                    </div>
                    <div className={'card-body'}>
                        <img src={health_and_safety} alt=""/>
                        <div> ჯანმრთელობის დაზღვევა</div>
                    </div>
                    <div className={'card-body'}>
                        <img src={directions_car_filled} alt=""/>
                        <div> ავტოდაზღვევა</div>
                    </div>
                    <div className={'card-body'}>
                        <img src={how_to_reg} alt=""/>
                        <div> პასუხისმგებლობის დაზღვევა</div>
                    </div>
                    <div className={'card-body'}>
                        <img src={flight_takeoff} alt=""/>
                        <div> სამოგზაურო დაზღვევა</div>
                    </div>
                </div>

            </div>
        </div>

    );

}

export default Home;