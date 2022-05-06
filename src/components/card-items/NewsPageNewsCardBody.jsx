import React from 'react';
import news_pic_1 from "../../assets/images/png/news_pic_1.png";

function NewsPageNewsCardBody({img, text, date, index}) {
    return (
        <div className={`news-page-card-body item${index}`}>
            <img src={img} alt={"news image"}/>
            <div className={'box'}>
                <div className={'text'}>{text}</div>
                <div className={'date'}>{date}</div>
            </div>
        </div>
    );
}

export default NewsPageNewsCardBody;