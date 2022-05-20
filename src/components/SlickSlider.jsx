import React from 'react';
import Slider from "react-slick";

import AboutHistoryCard from "./card-items/AboutHistoryCard";
import about_history_img_1 from "../assets/images/png/about_history_img_1.png";

function SlickSlider(props) {
    const settings = {
        dots: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500,
        slidesPerRow: 1
    };
    return (
        <div>
            <h2> Single Item</h2>
            <Slider {...settings}>

                <AboutHistoryCard img={about_history_img_1}/>
                <AboutHistoryCard img={about_history_img_1}/>
                <AboutHistoryCard img={about_history_img_1}/>
                <AboutHistoryCard img={about_history_img_1}/>

            </Slider>
        </div>
    );
}

export default SlickSlider;