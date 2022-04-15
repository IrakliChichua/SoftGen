import React from 'react';
import "./footer.scss"
import footer_unisonLogo from "./images/footer_unisonLogo.svg"
import app_store_badge from "./images/app_store_badge.svg"
import google_play_badge from "./images/google_play_badge.png"
import facebook_icon from "./images/facebook_icon.png"
import instagram_icon from "./images/instagram_icon.png"
import linkedin_icon from "./images/linkedin_icon.png"
import youtube_icon from "./images/youtube_icon.png"


function Footer(props) {
    return (
        <div className={'footer'}>
            <div className={'footer-box'}>
                <ul style={{paddingLeft:30}}>
                    <li style={{marginBottom: 38.3}}>
                        <img src={footer_unisonLogo}  width={'202'} height={"43.39"} alt=""/>
                    </li>
                    <li> ჩვენ შესახებ</li>
                    <li> კარიერა</li>
                    <li> პარტნიორები</li>
                    <li style={{marginTop: 40, marginBottom: 0}}>
                        <img style={{marginRight: 3.73}} src={app_store_badge} alt=""/>
                        <img style={{marginRight: 0}} src={google_play_badge} alt=""/>
                    </li>
                </ul>
                <ul>
                    <p>ინფორმაცია</p>
                    <li>სიახლეები</li>
                    <li>საინფორმაციო ფურცელი</li>
                    <li>სამედიცინო პროვაიდერები</li>
                    <li>ხელშეკრულებები</li>
                    <li id={'unison-2021'}>უნისონი © ყველა უფლება დაცულია, 2021</li>
                </ul>
                <ul>
                    <p>დახმარება</p>
                    <li>კონტაქტი</li>
                    <li>მომხმარებლის ხმა</li>
                    <li>ხშირად დასმული კითხვები</li>
                    <li>მონაცემთა დაცვა</li>
                </ul>
                <ul>
                    <p style={{marginBottom: 16}}>სოციალური ქსელები</p>
                    <li style={{marginBottom: 10}}>
                        <img src={facebook_icon} alt=""/>
                        Facebook
                    </li>
                    <li style={{marginBottom: 13}}>
                        <img src={instagram_icon} alt=""/>
                        Instagram
                    </li>
                    <li style={{marginBottom: 18}}>
                        <img src={linkedin_icon} alt=""/>
                        Linkedin
                    </li>
                    <li>
                        <img src={youtube_icon} alt=""/>
                        Youtube
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;