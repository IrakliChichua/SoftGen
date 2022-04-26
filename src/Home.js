import React, {useEffect, useState} from 'react';
import "./home.scss"
import {Carousel} from "react-bootstrap";
import WindowDimensions from "./WindowDimensions";
import bgi from "./images/bgi.png"
import directions_car_filled from "./images/directions_car_filled.svg"
import flight_takeoff from "./images/flight_takeoff.svg"
import health_and_safety from "./images/health_and_safety.svg"
import how_to_reg from "./images/how_to_reg.svg"
import property_insurance from "./images/property_insurance.svg"
import user_24px from "./images/user_24px.svg"
import auto_awesome_black_24dp from "./images/auto_awesome_black_24dp.svg"
import hotel_class_black_24dp from "./images/hotel_class_black_24dp.svg"
import people_outline_black_24dp from "./images/people_outline_black_24dp.svg"
import touch_app_black_24dp from "./images/touch_app_black_24dp.svg"
import timer_black_24dp from "./images/timer_black_24dp.svg"
import mobile_version_user from "./images/mobile_version_user.svg"
import business_black from "./images/business_black.svg"
import date_range_black from "./images/date_range_black.svg"
import payments_black from "./images/payments_black.svg"
import cart from "./images/cart.svg"
import news_pic_1 from "./images/news_pic_1.png"
import news_pic_2 from "./images/news_pic_2.png"
import news_pic_3 from "./images/news_pic_3.png"
import phone from "./images/phone.svg";

function Home(props) {

    const [width, height] = WindowDimensions()

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
            <div className={'red-line'}/>
            <div id={'home-background-2'}>
                <div className={'insurance-box'}>
                    <div className={'insurance-cards-row'}>
                        <div className={'insurance-card-body'}>
                            <svg id="Group_386" data-name="Group 386" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                                <path id="Path_25" data-name="Path 25" d="M0,0H24V24H0Z" transform="translate(0 0)" fill="none"/>
                                <g id="Group_14" data-name="Group 14" transform="translate(1 3)">
                                    <path id="Union_3" data-name="Union 3" d="M1.247,17.951V16.205H2.993V7.978H0L10.976,0l4.989,3.626V1h2.494V5.44l3.492,2.539H18.958v8.227H20.7v1.746ZM9.2,16.205h3.1V12.395H9.2ZM4.989,6.818v9.138H7.206V10.4h7.1v5.556h2.661V6.818L10.976,2.466Zm7.968,1.16H8.5a2.245,2.245,0,0,1,4.462,0h0Z" transform="translate(0 0)" fill="#006a9f"/>
                                </g>
                            </svg>
                            <div> ქონების <br/>დაზღვევა</div>
                        </div>
                        <div className={'insurance-card-body'}>
                            <svg id="health_and_safety_black_48dp" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="0 0 48 48">
                                <defs>
                                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#58b0e3"/>
                                        <stop offset="1" stop-color="#005287"/>
                                    </linearGradient>
                                </defs>
                                <rect id="Rectangle_5" data-name="Rectangle 5" width="48" height="48" fill="none"/>
                                <path id="Path_30" data-name="Path 30" d="M17,24H12V18h5V13h6v5h5v6H23v5H17ZM20,2,4,8V20.18C4,30.28,10.82,39.7,20,42c9.18-2.3,16-11.72,16-21.82V8ZM32,20.18c0,8-5.1,15.4-12,17.66C13.1,35.58,8,28.2,8,20.18v-9.4l12-4.5,12,4.5Z" transform="translate(4 2)" fill="url(#linear-gradient)"/>
                            </svg>
                            <div> ჯანმრთელობის <br/>დაზღვევა</div>
                        </div>
                        <div className={'insurance-card-body'}>
                            <svg id="directions_car_filled_black_48dp" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="0 0 48 48">
                                <defs>
                                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#58b0e3"/>
                                        <stop offset="1" stop-color="#005287"/>
                                    </linearGradient>
                                </defs>
                                <g id="Group_11" data-name="Group 11">
                                    <rect id="Rectangle_4" data-name="Rectangle 4" width="48" height="48" fill="none"/>
                                </g>
                                <g id="Group_13" data-name="Group 13" transform="translate(6 10)">
                                    <g id="Group_12" data-name="Group 12">
                                        <path id="Union_4" data-name="Union 4" d="M-772-656a2.006,2.006,0,0,1-2-2v-2h-24v2a2.006,2.006,0,0,1-2,2h-2a2.006,2.006,0,0,1-2-2v-16l4.16-11.98A3.007,3.007,0,0,1-797-688h22a2.987,2.987,0,0,1,2.84,2.02L-768-674v16a2.006,2.006,0,0,1-2,2Zm-28-8h28v-10h-28Zm1.62-14h24.74l-2.08-6H-796.3Zm18.38,9a3,3,0,0,1,3-3,3,3,0,0,1,3,3,3,3,0,0,1-3,3A3,3,0,0,1-780-669Zm-18,0a3,3,0,0,1,3-3,3,3,0,0,1,3,3,3,3,0,0,1-3,3A3,3,0,0,1-798-669Z" transform="translate(804 688)" fill="url(#linear-gradient)"/>
                                    </g>
                                </g>
                            </svg>
                            <div> ავტომობილის <br/>დაზღვევა</div>
                        </div>
                        <div className={'insurance-card-body'}>
                            <svg id="how_to_reg_black_24dp" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="0 0 48 48">
                                <defs>
                                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#58b0e3"/>
                                        <stop offset="1" stop-color="#005287"/>
                                    </linearGradient>
                                </defs>
                                <path id="Path_219" data-name="Path 219" d="M0,0H48V48H0Z" fill="none"/>
                                <path id="Path_220" data-name="Path 220" d="M19,20a8,8,0,1,0-8-8A8,8,0,0,0,19,20ZM19,8a4,4,0,1,1-4,4A4.012,4.012,0,0,1,19,8ZM7,32c.4-1.26,5.14-3.36,9.92-3.88l4.08-4A18.681,18.681,0,0,0,19,24c-5.34,0-16,2.68-16,8v4H21l-4-4ZM38.2,21,27.94,31.34,23.8,27.18,21,30l6.94,7L41,23.82Z" transform="translate(3 4)" fill="url(#linear-gradient)"/>
                            </svg>
                            <div> პასუხისმგებლობის <br/>დაზღვევა</div>
                        </div>
                        <div className={'insurance-card-body'}>
                            <svg id="flight_takeoff_black_48dp" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="0 0 48 48">
                                <defs>
                                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#58b0e3"/>
                                        <stop offset="1" stop-color="#005287"/>
                                    </linearGradient>
                                </defs>
                                <path id="Path_28" data-name="Path 28" d="M0,0H48V48H0Z" fill="none"/>
                                <path id="Path_29" data-name="Path 29" d="M3.16,34.43h38v4h-38ZM42.3,15.71a2.993,2.993,0,0,0-3.68-2.12L28,16.43,14.2,3.57,10.34,4.59l8.28,14.34L8.68,21.59,4.74,18.51l-2.9.78,5.18,8.98,33.14-8.86a3.044,3.044,0,0,0,2.14-3.7Z" transform="translate(1.84 3.57)" fill="url(#linear-gradient)"/>
                            </svg>
                            <div> სამოგზაურო <br/>დაზღვევა</div>
                        </div>
                        {width <= 1000 ?
                            <div className={'insurance-card-body'}>
                                <img src={cart} style={{marginTop:25}} alt=""/>
                                <div> შეიძინე <br/>ონლაინ</div>
                            </div>
                            : <> </>}
                    </div>
                </div>
                {width <= 1000 ?
                    <div className={'phone-box'}>
                        <div className={'version-mobile-phone'}>
                            <img width="30.13" height="30.13" src={phone} alt=""/>
                            <div>აგენტთან<br/>დაკავშირება</div>
                        </div>
                    </div>
                    : <> </>}
                <div id={'advantages-text'}>უპირატესობები</div>
                <div className={'advantages-box'}>
                    {width > 1000 ?
                        <div className={'advantages-row'}>
                            <div className={'advantages-card-body'}>
                                <img src={user_24px} alt=""/>
                                <div> მომხმარებლის კმაყოფილების <br/>96%-იანი დონე</div>
                            </div>
                            <div className={'advantages-card-body'}>
                                <img src={auto_awesome_black_24dp} alt=""/>
                                <div> მაღალრეიტინგული გადამზღვევი კომპანიები</div>
                            </div>
                            <div className={'advantages-card-body'}>
                                <img src={touch_app_black_24dp} alt=""/>
                                <div> თანამედროვე ელექტრონული სერვისები</div>
                            </div>
                            <div className={'advantages-card-body'}>
                                <img src={timer_black_24dp} alt=""/>
                                <div> ზარალის დარეგულირების უმოკლესი ვადები</div>
                            </div>
                            <div className={'advantages-card-body'}>
                                <img src={people_outline_black_24dp} alt=""/>
                                <div> კორპორატიული კლიენტების ფართო სპექტრი</div>
                            </div>
                            <div className={'advantages-card-body'}>
                                <img src={hotel_class_black_24dp} alt=""/>
                                <div> გუნდის პროფესიონალიზმი <br/>და მრავალწლიანი გამოცდილება</div>
                            </div>
                        </div>
                        :
                        <div className={'advantages-column'}>
                            <div className={'advantages-card-body'}>
                                <img src={mobile_version_user} alt=""/>
                                <div className={'number'}> 32067</div>
                                <div> კმაყოფილი<br/> მომხმარებელი</div>
                            </div>
                            <div className={'advantages-card-body'}>
                                <img src={business_black} alt=""/>
                                <div className={'number'}> 5</div>
                                <div> ფილიალი<br/>საქართველოში</div>
                            </div>
                            <div className={'advantages-card-body'}>
                                <img src={payments_black} alt=""/>
                                <div className={'number'}> 2’800’843</div>
                                <div> ანაზღაურებული<br/>თანხა</div>
                            </div>
                            <div className={'advantages-card-body'}>
                                <img src={date_range_black} alt=""/>
                                <div className={'number'}> 12</div>
                                <div> წარმატებული<br/>წელი</div>
                            </div>

                        </div>
                    }
                </div>
                <div id={'news-text'}>სიახლეები</div>
                <div className={'news-box'}>
                    <div className={'news-row'}>
                        <div className={'news-card-body'}>
                            <img src={news_pic_1} alt=""/>
                            <div className={'box'}>
                                <div className={'text'}>ქალაქგარეთ ცხოვრების 10 გავრცელებული მითი</div>
                                <div className={'date'}>6 ნოემბერი</div>
                            </div>
                        </div>
                        <div className={'news-card-body'}>
                            <img src={news_pic_2} alt=""/>
                            <div className={'box'}>
                                <div className={'text'}> ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან</div>
                                <div className={'date'}>28 ოქტომბერი</div>
                            </div>
                        </div>
                        <div className={'news-card-body'}>
                            <img src={news_pic_3} alt=""/>
                            <div className={'box'}>
                                <div className={'text'}> ავტომობილის სალონის მოვლის თანამედროვე ხერხები</div>
                                <div className={'date'}>14 ოქტომბერი</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'all-news-box'}>
                    <div className={'all-news'}>
                        <div> ყველა სიახლე</div>
                        <div className={'arrow-right'}/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;