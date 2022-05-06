import React, {useEffect, useState} from 'react';
import WindowDimensions from "../utils/WindowDimensions";
import "../sass/footer.scss"
import footer_unisonLogo from "../assets/images/svg/footer_unisonLogo.svg"
import app_store_badge from "../assets/images/svg/app_store_badge.svg"
import google_play_badge from "../assets/images/png/google_play_badge.png"
import facebook_icon from "../assets/images/png/facebook_icon.png"
import instagram_icon from "../assets/images/png/instagram_icon.png"
import linkedin_icon from "../assets/images/png/linkedin_icon.png"
import youtube_icon from "../assets/images/png/youtube_icon.png"
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";


function Footer(props) {

    const [width, height] = WindowDimensions()

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


                    <li>
                        <Nav.Link>შესახებ</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link>კარიერა</Nav.Link>
                    </li>
                    <li className={'li-full-line'}><Nav.Link>პარტნიორები</Nav.Link></li>

                    {width > 1000 ? <li className={'badges'}>
                        <img style={{marginRight: 3.73}} src={app_store_badge} alt=""/>
                        <img style={{marginRight: 0}} src={google_play_badge} alt=""/>
                    </li> : <></>}


                </ul>
                <ul>
                    <p>ინფორმაცია</p>
                    <li><Nav.Link>სიახლეები</Nav.Link></li>
                    {width > 1000 ? <li><Nav.Link>საინფორმაციო ფურცელი</Nav.Link></li> :
                        <li><Nav.Link>ხელშეკრულებები</Nav.Link></li>}
                    {width > 1000 ? <li><Nav.Link>სამედიცინო პროვაიდერები</Nav.Link></li> :
                        <li><Nav.Link>საინფორმაციო ფურცელი</Nav.Link></li>}
                    {width > 1000 ? <li><Nav.Link>ხელშეკრულებები</Nav.Link></li> :
                        <li><Nav.Link>სამედიცინო პროვაიდერები</Nav.Link></li>}
                    {width > 1000 ? <li className={'li-full-line'} id={'unison-2021'}>უნისონი © ყველა უფლება დაცულია,
                        2021</li> : <></>}

                </ul>
                <ul>
                    <p>დახმარება</p>
                    <li><Nav.Link>კონტაქტი</Nav.Link></li>
                    {width > 1000 ? <li><Nav.Link>მომხმარებლის ხმა</Nav.Link></li> :
                        <li><Nav.Link>მონაცემთა დაცვა</Nav.Link></li>}
                    {width > 1000 ? <li><Nav.Link>ხშირად დასმული კითხვები</Nav.Link></li> :
                        <li><Nav.Link>მომხმარებლის <br/>ხმა</Nav.Link></li>}
                    {width > 1000 ? <li><Nav.Link>მონაცემთა დაცვა</Nav.Link></li> :
                        <li><Nav.Link>ხშირად დასმული კითხვები</Nav.Link></li>}
                </ul>
                <ul className={'social-network'}>
                    {width > 1000 ? <p style={{marginBottom: 16}}>სოციალური ქსელები</p> :
                        <li className={'badges'}>
                            <img style={{marginRight: 18.34}} src={app_store_badge} width={120} height={40} alt=""/>
                            <img style={{marginRight: 0}} src={google_play_badge} width={152} height={60} alt=""/>
                        </li>
                    }
                    <li className={'fb-icon'}>
                        <Nav.Link as={Link} to="/students" >
                            <img src={facebook_icon} alt=""/>
                            Facebook
                        </Nav.Link>
                    </li>
                    <li className={'ig-icon'}>
                        <Nav.Link as={Link} to="/students">
                            <img src={instagram_icon} alt="" style={{marginRight:14}}/>
                            Instagram
                        </Nav.Link>
                    </li>
                    {width > 1000 ?
                        <li className={'linkedin-icon'}>
                            <Nav.Link as={Link} to="/students">
                                <img src={linkedin_icon} alt="" style={{marginRight:17}}/>
                                Linkedin
                            </Nav.Link>
                        </li>
                        :
                        <li className={'youtube-icon'}>
                            <Nav.Link as={Link} to="/students">
                                <img src={youtube_icon} alt="" style={{marginRight:14}}/>
                                Youtube
                            </Nav.Link>
                        </li>
                    }
                    {width > 1000 ?
                        <li className={'youtube-icon'}>
                            <Nav.Link as={Link} to="/students">
                                <img src={youtube_icon} alt="" style={{marginRight:14}}/>
                                Youtube
                            </Nav.Link>
                        </li>
                        :
                        <li className={'linkedin-icon'}>
                            <Nav.Link as={Link} to="/students">
                                <img src={linkedin_icon} alt="" style={{marginRight:17}}/>
                                Linkedin
                            </Nav.Link>
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