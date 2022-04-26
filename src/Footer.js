import React, {useEffect, useState} from 'react';
import WindowDimensions from "./WindowDimensions";
import "./footer.scss"
import footer_unisonLogo from "./images/footer_unisonLogo.svg"
import app_store_badge from "./images/app_store_badge.svg"
import google_play_badge from "./images/google_play_badge.png"
import facebook_icon from "./images/facebook_icon.png"
import instagram_icon from "./images/instagram_icon.png"
import linkedin_icon from "./images/linkedin_icon.png"
import youtube_icon from "./images/youtube_icon.png"


function Footer(props) {

    const [width,height] = WindowDimensions()

    return (
        <div className={'footer'}>
            <div className={'footer-box'}>
                <ul>
                    {width > 1000 ?
                        <li className={'li-full-line'} style={{marginBottom: 38.3}}>
                            <img src={footer_unisonLogo} width={'202'} height={"43.39"} alt=""/>
                        </li>
                        :
                        <li className={'li-full-line'} style={{marginBottom: 26}}>
                            <img src={footer_unisonLogo} width={'151'} height={"32"} alt=""/>
                        </li>
                    }


                    <li> ჩვენ შესახებ</li>
                    <li> კარიერა</li>
                    <li className={'li-full-line'}> პარტნიორები</li>

                    {width > 1000 ? <li className={'badges'}>
                        <img style={{marginRight: 3.73}} src={app_store_badge} alt=""/>
                        <img style={{marginRight: 0}} src={google_play_badge} alt=""/>
                    </li> : <></>}


                </ul>
                <ul>
                    <p>ინფორმაცია</p>
                    <li>სიახლეები</li>
                    {width > 1000 ? <li>საინფორმაციო ფურცელი</li> : <li>ხელშეკრულებები</li>}
                    {width > 1000 ? <li>სამედიცინო პროვაიდერები</li> : <li>საინფორმაციო ფურცელი</li>}
                    {width > 1000 ? <li>ხელშეკრულებები</li> : <li>სამედიცინო პროვაიდერები</li>}
                    {width > 1000 ? <li className={'li-full-line'} id={'unison-2021'}>უნისონი © ყველა უფლება დაცულია,
                        2021</li> : <></>}

                </ul>
                <ul>
                    <p>დახმარება</p>
                    <li>კონტაქტი</li>
                    {width > 1000 ? <li>მომხმარებლის ხმა</li> : <li>მონაცემთა დაცვა</li>}
                    {width > 1000 ? <li>ხშირად დასმული კითხვები</li> : <li>მომხმარებლის <br/>ხმა</li>}
                    {width > 1000 ? <li>მონაცემთა დაცვა</li> : <li>ხშირად დასმული კითხვები</li>}
                </ul>
                <ul>
                    {width > 1000 ? <p style={{marginBottom: 16}}>სოციალური ქსელები</p> :
                        <li className={'badges'}>
                            <img style={{marginRight: 18.34}} src={app_store_badge} width={120} height={40} alt=""/>
                            <img style={{marginRight: 0}} src={google_play_badge} width={152} height={60} alt=""/>
                        </li>
                    }
                    <li className={'fb-icon'}>
                        <img src={facebook_icon} alt=""/>
                        Facebook
                    </li>
                    <li className={'ig-icon'}>
                        <img src={instagram_icon} alt=""/>
                        Instagram
                    </li>
                    {width > 1000 ?
                        <li className={'linkedin-icon'}>
                            <img src={linkedin_icon} alt=""/>
                            Linkedin
                        </li>
                        :
                        <li className={'youtube-icon'}>
                            <img src={youtube_icon} alt=""/>
                            Youtube
                        </li>
                    }
                    {width > 1000 ?
                        <li className={'youtube-icon'}>
                            <img src={youtube_icon} alt=""/>
                            Youtube
                        </li>
                        :
                        <li className={'linkedin-icon'}>
                            <img src={linkedin_icon} alt=""/>
                            Linkedin
                        </li>
                    }
                    {width < 1000 ? <li className={'li-full-line'} id={'unison-2021'}>უნისონი © ყველა უფლება დაცულია,
                        2021</li> : <></>}

                </ul>
            </div>
        </div>
    );
}

export default Footer;