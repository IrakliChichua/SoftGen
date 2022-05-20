import React, {useEffect, useState} from 'react';
import "../../sass/home.scss"
import {Carousel} from "react-bootstrap";
import WindowDimensions from "../../utils/WindowDimensions";
import bgi from "../../assets/images/png/bgi.png"
import user_24px from "../../assets/images/svg/user_24px.svg"
import auto_awesome_black_24dp from "../../assets/images/svg/auto_awesome_black_24dp.svg"
import hotel_class_black_24dp from "../../assets/images/svg/hotel_class_black_24dp.svg"
import people_outline_black_24dp from "../../assets/images/svg/people_outline_black_24dp.svg"
import touch_app_black_24dp from "../../assets/images/svg/touch_app_black_24dp.svg"
import timer_black_24dp from "../../assets/images/svg/timer_black_24dp.svg"
import mobile_version_user from "../../assets/images/svg/mobile_version_user.svg"
import business_black from "../../assets/images/svg/business_black.svg"
import date_range_black from "../../assets/images/svg/date_range_black.svg"
import payments_black from "../../assets/images/svg/payments_black.svg"
import cart from "../../assets/images/svg/cart.svg"
import buy_online_arrow from "../../assets/images/svg/buy_online_arrow.svg"
import buy_online_background from "../../assets/images/svg/buy_online_background.svg"
import news_pic_1 from "../../assets/images/png/news_pic_1.png"
import news_pic_2 from "../../assets/images/png/news_pic_2.png"
import news_pic_3 from "../../assets/images/png/news_pic_3.png"
import phone from "../../assets/images/svg/phone.svg";
import Property_insurance from "../../assets/images/Property_insurance";
import Health_and_safety from "../../assets/images/Health_and_safety";
import Directions_car_filled from "../../assets/images/Directions_car_filled";
import How_to_reg from "../../assets/images/How_to_reg";
import FlightTakeoff from "../../assets/images/Flight_takeoff";
import InsuranceCard from "../../components/card-items/InsuranceCard";
import NewsCardBody from "../../components/card-items/NewsCardBody";

function Home(props) {

    const [width, height] = WindowDimensions()
    const [insuranceMouseOverBox, setInsuranceMouseOverBox] = useState(0);


    function insuranceCardMouseOut() {
        setInsuranceMouseOverBox(0);
    }

    return (
        <div>
            <Carousel className={'home-page-slider'} interval={5000}>
                <Carousel.Item>
                    <div className={'blue-background'}/>
                    <div className={'background-gradient'}/>
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
                    <div className={'blue-background'}/>
                    <div className={'background-gradient'}/>
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
                    <div className={'blue-background'}/>
                    <div className={'background-gradient'}/>
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
            <div className={'red-line'}>
                <div className={"buy-online-arrow"}>
                    <img id={"buy-online-arrow-background"} src={buy_online_background} alt=''/>
                    <div>შეიძინე ონლაინ</div>
                    <img id={"buy-online-the-arrow"} src={buy_online_arrow} alt=''/>
                </div>
            </div>
            <div id={'home-background-2'}>
                <div className={'insurance-box'}>
                    <div className={'insurance-cards-row'}>
                        <InsuranceCard text={<>ქონების <br/>დაზღვევა</>} svg={<Property_insurance/>} font={"Helvetica_Neue_LT_GEO"}/>
                        <InsuranceCard text={<>ჯანმრთელობის <br/>დაზღვევა</>} svg={<Health_and_safety/>} font={"Helvetica_Neue_LT_GEO"}/>
                        <InsuranceCard text={<>ავტომობილის <br/>დაზღვევა</>} svg={<Directions_car_filled/>} font={"Helvetica_Neue_LT_GEO"}/>
                        <InsuranceCard text={<>პასუხისმგებლობის <br/>დაზღვევა</>} svg={<How_to_reg/>} font={"Helvetica_Neue_LT_GEO"}/>
                        <InsuranceCard text={<>სამოგზაურო <br/>დაზღვევა</>} svg={<FlightTakeoff/>} font={"Helvetica_Neue_LT_GEO"}/>
                        {width <= 1000 ?
                            <div className={'insurance-card-body'}>
                                <img src={cart} style={{marginTop: 25}} alt=""/>
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
                {width <=1000 ?
                    <div className={'separator'}/> : <></>
                }
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
                                <div> მაღალრეიტინგული გადამზღვევი <br/>კომპანიები</div>
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
                {width <=1000 ?
                    <div className={'separator'} style={{marginTop:12}}/> : <></>
                }
                <div id={'news-text'}>სიახლეები</div>
                <div className={'news-box'}>
                    <div className={'news-row'}>
                        <NewsCardBody img={news_pic_1} text={<>ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან</>} date={<>6 ნოემბერი</>}/>
                        <NewsCardBody img={news_pic_2} text={<>ქალაქგარეთ ცხოვრების 10 გავრცელებული მითი</>} date={<>28 ოქტომბერი</>}/>
                        <NewsCardBody img={news_pic_3} text={<>ავტომობილის სალონის მოვლის თანამედროვე ხერხები</>} date={<>14 ოქტომბერი</>}/>
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