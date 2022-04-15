import React, {useEffect, useState} from 'react';
import "./home.scss"
import {Carousel} from "react-bootstrap";
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
import cart from "./images/cart.svg"
import news_pic_1 from "./images/news_pic_1.png"
import news_pic_2 from "./images/news_pic_2.png"
import news_pic_3 from "./images/news_pic_3.png"
import news_arrow_right from "./images/news_arrow_right.svg"
import phone from "./images/phone.svg";

function Home(props) {

    function getWindowDimensions() {
        const {innerWidth: width, innerHeight: height} = window;
        return {
            width,
            height
        };
    }

    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }

    const {height, width} = useWindowDimensions();

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
                            <img src={property_insurance} style={{width: 48}} alt=""/>
                            <div> ქონების <br/>დაზღვევა</div>
                        </div>
                        <div className={'insurance-card-body'}>
                            <img src={health_and_safety} alt=""/>
                            <div> ჯანმრთელობის <br/>დაზღვევა</div>
                        </div>
                        <div className={'insurance-card-body'}>
                            <img src={directions_car_filled} alt=""/>
                            <div> ავტომობილის <br/>დაზღვევა</div>
                        </div>
                        <div className={'insurance-card-body'}>
                            <img src={how_to_reg} alt=""/>
                            <div> პასუხისმგებლობის <br/>დაზღვევა</div>
                        </div>
                        <div className={'insurance-card-body'}>
                            <img src={flight_takeoff} alt=""/>
                            <div> სამოგზაურო <br/>დაზღვევა</div>
                        </div>
                        {width <= 1000 ?
                            <div className={'insurance-card-body'}>
                                <img src={cart} alt=""/>
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
                        <img src={news_arrow_right} width={12} height={12} alt=""/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;