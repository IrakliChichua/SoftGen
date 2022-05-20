import React from 'react';
import news_pic_1 from "../../assets/images/png/news_pic_1.png";
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

function NewsPageNewsCardBody({img, text, date, index}) {

    function imageClick(url) {
        window.location = url;
    }

    return (
        <div className={`news-page-card-body item${index}`}>
            <Nav.Link as={Link} to={`/news/${index}`}><img src={img} alt={"news image"}/></Nav.Link>
            <div className={'box'}>
                <div className={'text'}>
                    <Nav.Link as={Link} to={`/news/${index}`}>{text}</Nav.Link>
                </div>
                <div className={'date'}>{date}</div>
            </div>
        </div>
    );
}

export default NewsPageNewsCardBody;