import React, {useEffect, useRef, useState} from 'react';
import "../../sass/news.scss"
import subDays from "date-fns/subDays";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import arrow_left_circle from "../../assets/images/svg/arrow_left_circle.svg"
import arrow_right_circle from "../../assets/images/svg/arrow_right_circle.svg"
import X_calendar from "../../assets/images/svg/X_calendar.svg"
import NewsNavLeftItem from "../../components/NewsNavLeftItem";
import news_pic_1 from "../../assets/images/png/news_pic_1.png";
import news_pic_2 from "../../assets/images/png/news_pic_2.png";
import news_pic_3 from "../../assets/images/png/news_pic_3.png";
import news_pic_4 from "../../assets/images/png/news_pic_4.png";
import news_pic_5 from "../../assets/images/png/news_pic_5.png";
import news_pic_6 from "../../assets/images/png/news_pic_6.png";
import news_pic_7 from "../../assets/images/png/news_pic_7.png";
import news_pic_8 from "../../assets/images/png/news_pic_8.png";
import news_pic_9 from "../../assets/images/png/news_pic_9.png";
import news_pic_10 from "../../assets/images/png/news_pic_10.png";
import NewsPageNewsCardBody from "../../components/card-items/NewsPageNewsCardBody";
import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import Newspaper from "../../assets/images/Newspaper";
import Feed from "../../assets/images/Feed";
import Campaign from "../../assets/images/Campaign";
import WindowDimensions from "../../utils/WindowDimensions";
import Calendar from "../../assets/images/Calendar";
import Search from "../../assets/images/Search";
import {addDays} from "date-fns";

let news = [
    {
        id: "1",
        img: news_pic_1,
        text: "ქალაქგარეთ ცხოვრების 10 გავრცელებული მითი",
        date: "28 ოქტომბერი"
    },
    {
        id: "2",
        img: news_pic_2,
        text: "ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან",
        date: "28 ოქტომბერი"
    },
    {
        id: "3",
        img: news_pic_3,
        text: "ავტომობილის სალონის მოვლის თანამედროვე ხერხები",
        date: "14 ოქტომბერი"
    },
    {
        id: "4",
        img: news_pic_4,
        text: "ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან",
        date: "28 ოქტომბერი"
    },
    {
        id: "5",
        img: news_pic_5,
        text: "ავტომობილის სალონის მოვლის თანამედროვე ხერხები",
        date: "14 ოქტომბერი"
    },
    {
        id: "6",
        img: news_pic_6,
        text: "ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან",
        date: "28 ოქტომბერი"
    },
    {
        id: "7",
        img: news_pic_7,
        text: "ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან",
        date: "28 ოქტომბერი"
    },
    {
        id: "8",
        img: news_pic_8,
        text: "ავტომობილის სალონის მოვლის თანამედროვე ხერხები",
        date: "14 ოქტომბერი"
    },
    {
        id: "9",
        img: news_pic_9,
        text: "ჯანსაღი კვების საიდუმლო სამხრეთ აზიიდან",
        date: "28 ოქტომბერი"
    },
    {
        id: "10",
        img: news_pic_10,
        text: "ავტომობილის სალონის მოვლის თანამედროვე ხერხები",
        date: "14 ოქტომბერი"
    },
]
let i = 0;

function News(props) {

    const [activeTab, setActiveTab] = useState("news")
    const [width, height] = WindowDimensions()
    const [activeSearch, setActiveSearch] = useState('')
    const [activeCalendar, setActiveCalendar] = useState('')
    const searchInput = useRef(null)
    const [startDate, setStartDate] = useState(new Date());
    const [datePicker, setDatePicker] = useState(false);

    const activateSearch = () => {
        setActiveSearch('active-search')
    }
    const activateCalendar = (i) => {
        i%2 ? setActiveSearch('active-calendar') : setActiveSearch('')
    }

    const datePickerToggle = () => {
        setDatePicker((prevState) => !prevState);
        activateCalendar(++i);

    };

    return (
        <div className={"news-page"} style={{display: "flex", flexDirection: "column"}}>
            <div className={"navigation-background"}/>
            <div className={"news-background"}>
                <div className={"body"}>
                    <div className={"news-navigation"}>
                        <div className={"row-container"}>
                            <div className={"left"}>
                                <NewsNavLeftItem active={activeTab === "news"} tab={"news"} activeTab={activeTab}
                                                 setActiveTab={setActiveTab} svg={<Newspaper/>}
                                                 text={<>სიახლეები</>}/>
                                <NewsNavLeftItem active={activeTab === "blog"} tab={"blog"} activeTab={activeTab}
                                                 setActiveTab={setActiveTab} svg={<Feed/>} text={<>ბლოგი</>}/>
                                <NewsNavLeftItem active={activeTab === "campaign"} tab={"campaign"}
                                                 activeTab={activeTab} setActiveTab={setActiveTab}
                                                 svg={<Campaign/>} text={<>აქცია</>}/>
                            </div>
                            <div className={`right ${activeSearch} ${activeCalendar}`}>
                                <div className={"item"}>
                                    <div className={`top`}
                                         onClick={activateSearch}
                                    >
                                        {activeSearch === 'active-search' && width < 1000 ?
                                            <span id={"search-calendar-text"}>ძიება</span> : <></>}
                                        {width > 1000 || (width < 1000 && activeSearch === 'active-search') ?
                                            <input type="text" autoFocus onBlur={() => setActiveSearch('')}
                                                   placeholder="ჩაწერეთ საძიებო სიტყვა"/> : <></>}
                                        <Search/>
                                        {width <= 1000 && activeSearch !== 'active-search' ?
                                            <span id={"search-calendar-text"}>ძიება</span> : <></>}

                                    </div>
                                    <div className={"active"}/>
                                </div>
                                <div className={'overlay-trigger'}>
                                    <OverlayTrigger
                                        // trigger={`${datePicker ? "click" : "hover"}`}

                                        placement={'bottom'}
                                        overlay={
                                            !datePicker ? <Tooltip id={`tooltip-bottom`}>
                                                <span>პერიოდის მითითება</span>
                                            </Tooltip> : <></>
                                        }
                                    >
                                        <div className={"calendar-box"} onClick={datePickerToggle}>
                                            {datePicker && width>1000 ? <img id={"x-calendar"} src={X_calendar} alt=''/> :
                                                <Calendar/>}
                                            {width <= 1000 ?
                                                <span id={"search-calendar-text"}>დროის პერიოდი</span> : <></>}
                                        </div>

                                    </OverlayTrigger>
                                    {
                                        datePicker && width > 1000 &&
                                        <DatePicker id={"news-datepicker"} selected={startDate}
                                                    onChange={(date) => setStartDate(date)}
                                                    dateFormat="MM/dd/yyyy" minDate={subDays(new Date(), 10)}
                                                     maxDate={addDays(new Date(), 0)}
                                         />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={"bottom"}/>
                    </div>

                    <div className={"content"}>

                        {news.map((item, index) => (
                            <NewsPageNewsCardBody key={index} index={index} img={item.img} text={item.text}
                                                  date={item.date}/>
                        ))}


                    </div>

                    <div className={"page-nav"}>
                        <img src={arrow_left_circle} alt=''/>
                        <div className={"text"}> გვერდი 2 (36)</div>
                        <img src={arrow_right_circle} alt=''/>
                    </div>


                </div>

            </div>
            {/*
            <img className={"navigation-background_second"} src={news_background} alt=''/>
*/}

        </div>
    );
}

export default News
;