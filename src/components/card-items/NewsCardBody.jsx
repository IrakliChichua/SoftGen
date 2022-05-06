import React from 'react';
import news_pic_1 from "../../assets/images/png/news_pic_1.png";

function NewsCardBody({img, text, date}) {

    return (
        <div className={`news-card-body`}>
            <img src={img} alt={"news image"}/>
            <div className={'box'}>
                <div className={'text'}>{text}</div>
                <div className={'date'}>{date}</div>
            </div>
        </div>
    );
}

export default NewsCardBody;