import React, {useEffect, useState} from 'react';
import {Container, Dropdown, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./nav.scss"
import logo from "./images/svg/logo.svg"
import shopping_cart from "./images/svg/shopping_cart.svg"
import uk_flag from "./images/png/uk_flag.png"
import rus_flag from "./images/png/rus_flag.png"
import geo_flag from "./images/png/geo_flag.png"
import phone from "./images/svg/phone.svg"
import mobile_menu from "./images/svg/mobile_menu.svg"
import mobile_logo from "./images/svg/mobile_logo.svg"
import mobile_exit from "./images/svg/mobile_exit.svg"
import mobile_profile from "./images/svg/mobile_profile.svg"
import mobile_phone from "./images/svg/mobile_phone.svg"
import shield from "./images/svg/shield.svg"
import briefcase from "./images/svg/briefcase.svg"
import footer_unisonLogo from "./images/svg/footer_unisonLogo.svg"
import WindowDimensions from "./WindowDimensions";
import MyOffice from "./images/My_office";
import Health_and_safety from "./images/Health_and_safety";
import Directions_car_filled from "./images/Directions_car_filled";
import My_office from "./images/My_office";
import Flight_takeoff from "./images/Flight_takeoff";
import data from "bootstrap/js/src/dom/data";
import InvisContainer from "./InvisContainer";

const flags = {'ka': 'ქართული', 'en': "English", 'ru': 'Русский'}

function Navigation() {

    const [showDropdown, setShowDropdown] = useState(false);
    const [isMenuOpen, setMenu] = useState(false);
    const [flag, setFlag] = useState('ka');

    const [width, height] = WindowDimensions()
    const [languageSwitch, setLanguageSwitch] = useState('geo');

    const handleMenu = () => {
        setMenu((prevState) => !prevState);
    };


    return (
        <>
            <div className={'nav'}>
                <Navbar variant="dark">
                    <Nav className={'upper-left-nav'} activeKey="/">
                        <Nav.Link as={Link} to="/home">მთავარი</Nav.Link>
                        <Nav.Link as={Link} to="/home">ჩვენს შესახებ</Nav.Link>
                        <Nav.Link as={Link} to="/home">სიახლეები</Nav.Link>
                        <Nav.Link as={Link} to="/home">პარტნიორები</Nav.Link>
                        <Nav.Link as={Link} to="/home" style={{padding: 0}}>კონტაქტი</Nav.Link>
                    </Nav>
                    <div className={'upper-right-nav'}>
                        <NavDropdown title={flag === 'ka' ? <><img src={geo_flag} style={{marginRight: 4}}
                                                                   alt=''/> {flags[flag]}</>
                            : flag === 'en' ? <><img src={uk_flag} style={{marginRight: 4}} alt=''/> {flags[flag]} </>
                                : <><img src={rus_flag} style={{marginRight: 4}} alt={''}/> {flags[flag]}</>
                        }
                                     id="collasible-nav-dropdown"
                                     show={showDropdown}
                                     onMouseLeave={() => setShowDropdown(false)}
                                     onMouseOver={() => setShowDropdown(true)}>
                            {flag !== 'ka' && <NavDropdown.Item href="#action/3.1" onClick={() => setFlag('ka')}>
                                <img src={geo_flag} alt=''/>
                                ქართული
                            </NavDropdown.Item>}
                            {flag !== 'en' && <NavDropdown.Item href="#action/3.2" onClick={() => setFlag('en')}>
                                <img src={uk_flag} alt={''}/>
                                English</NavDropdown.Item>}
                            {flag !== 'ru' && <NavDropdown.Item href="#action/3.3" onClick={() => setFlag('ru')}>
                                <img src={rus_flag} alt={''}/>
                                Русский</NavDropdown.Item>}

                        </NavDropdown>
                        <div className={'hot-number'}>
                            <Navbar.Text id="hot">ცხელი ხაზი</Navbar.Text>
                            <Navbar.Text id="number"><a href="tel:2991991">2 991 991</a></Navbar.Text>
                        </div>
                    </div>
                </Navbar>
                <div className={'lower-nav'}>
                    <Nav className={'lower-nav-nav'} activeKey="/">
                        <div className={'left'}>
                            <Nav.Link as={Link} to="/home">
                                <img id={'unison-logo'} src={logo} alt=""/>
                            </Nav.Link>
                            <InvisContainer number={1} header={<>ფიზიკური<br/>პირებისთვის</>}/>
                            <InvisContainer number={2} header={<>იურიდიული<br/>პირებისთვის</>}/>
                            <InvisContainer number={3} header={<>სავალდებულო<br/>დაზღვევა</>}/>
                        </div>
                        <div className={'right'}>
                            <Nav.Link className={'buy-online-box'} as={Link} to="/home">
                                <img src={shopping_cart} style={{marginRight: 8}} alt=""/>
                                <div>შეიძინე ონლაინ</div>
                            </Nav.Link>
                            <Nav.Link className={'my-office'} as={Link} to="/home" style={{padding: 0, marginRight: 0, minHeight: 70}}>
                                <MyOffice/>
                                <div>ჩემი<br/>კაბინეტი</div>
                            </Nav.Link>
                        </div>

                    </Nav>
                </div>
                <div className={'phone'}>
                    <img width="30.13" height="30.13" src={phone} alt=""/>
                    <div>აგენტთან<br/>დაკავშირება</div>
                </div>
            </div>


            {width <= 1000 ?
                <>

                    <div className={'mobile-nav'}>
                        <div className={'head'}>
                            <div className={'gradient'}/>
                            <div className={'logo-menu'}>
                                <img id='footer-unisonLogo' src={footer_unisonLogo} alt=''/>
                                <img id='mobile-menu' src={mobile_menu} onClick={handleMenu} alt=''/>
                            </div>
                        </div>
                    </div>

                    <Offcanvas show={isMenuOpen} onHide={handleMenu} placement={"end"}>
                        <Offcanvas.Body>
                            <div className={'mobile-menu-header'}>
                                <img id='mobile-logo' src={mobile_logo} alt=''/>
                                <div className={'logo-exit'}>
                                    <img id='mobile-exit' src={mobile_exit} onClick={handleMenu} alt=''/>
                                </div>
                            </div>
                            <Nav.Link className={'my-office'} as={Link} to="/home" style={{padding: 0, marginRight: 0}}>
                                <svg id="Component_8_12" data-name="Component 8 – 11" xmlns="http://www.w3.org/2000/svg"
                                     width="62" height="62" viewBox="0 0 62 62">
                                    <circle id="Ellipse_1" data-name="Ellipse 1" cx="31" cy="31" r="31" fill="#f2f2f2"/>
                                    <g id="_24px-2" data-name="24px-2" transform="translate(13 13)">
                                        <path id="Path_35" data-name="Path 35" d="M0,0H36V36H0Z" fill="none"/>
                                        <path id="Path_36" data-name="Path 36"
                                              d="M18,7.325A3.675,3.675,0,1,1,14.325,11,3.675,3.675,0,0,1,18,7.325m0,15.75c5.2,0,10.675,2.555,10.675,3.675v1.925H7.325V26.75c0-1.12,5.478-3.675,10.675-3.675M18,4a7,7,0,1,0,7,7A7,7,0,0,0,18,4Zm0,15.75c-4.673,0-14,2.345-14,7V32H32V26.75C32,22.1,22.673,19.75,18,19.75Z"
                                              fill="#707070"/>
                                    </g>
                                </svg>
                                <div>ჩემი<br/>კაბინეტი</div>
                            </Nav.Link>
                            <div className={'mobile-menu-insurance'}>
                                <div className={'mobile-menu-insurance-card-columns'}>
                                    <div className={'mobile-card-body'}>
                                        <img src={mobile_profile} alt=''/>
                                        <div> ფიზიკური პირებისთვის</div>
                                        <div className={'mobile-arrow-right'}/>
                                    </div>
                                    <div className={'mobile-card-body'}>
                                        <img src={briefcase} alt=''/>
                                        <div> იურიდიული პირებისთვის</div>
                                        <div className={'mobile-arrow-right'}/>
                                    </div>
                                    <div className={'mobile-card-body'}>
                                        <img src={shield} alt=''/>
                                        <div> სავალდებულო დაზღვევა</div>
                                        <div className={'mobile-arrow-right'}/>
                                    </div>
                                </div>
                            </div>
                            <Nav.Link className={'buy-online-box'} as={Link} to="/home">
                                <img src={shopping_cart} width={24} height={24} style={{marginRight: 8}} alt=""/>
                                <div style={{fontSize: 18, color: "white"}}>შეიძინე ონლაინ</div>
                            </Nav.Link>
                            <div className={'mobile-info'}>
                                <div className={'mobile-info-container'}><Nav.Link as={Link} to="/students">ჩვენს შესახებ</Nav.Link>
                                </div>
                                <div className={'mobile-info-container'}><Nav.Link as={Link} to="/students">სიახლეები</Nav.Link>
                                </div>
                                <div className={'mobile-info-container'}><Nav.Link as={Link} to="/students">პარტნიორები</Nav.Link>
                                </div>
                                <div className={'mobile-info-container'}><Nav.Link as={Link} to="/students">კონტაქტი</Nav.Link>
                                </div>
                            </div>
                            <div className={'mobile-menu-footer'}>
                                <div className={'mobile-menu-languages'}>
                                    <Nav.Item className={languageSwitch === 'geo' ? 'nav-item-active' : ''}
                                              onClick={() => setLanguageSwitch('geo')}
                                              href="#action/3.1">
                                        <div
                                            className={languageSwitch === 'geo' ? 'selected-language selected-sign' : 'selected-sign'}/>
                                        ქართული</Nav.Item>
                                    <Nav.Item className={languageSwitch === 'eng' ? 'nav-item-active' : ''}
                                              onClick={() => setLanguageSwitch('eng')}
                                              href="#action/3.2">
                                        <div
                                            className={languageSwitch === 'eng' ? 'selected-language selected-sign' : 'selected-sign'}/>

                                        English</Nav.Item>
                                    <Nav.Item className={languageSwitch === 'rus' ? 'nav-item-active' : ''}
                                              onClick={() => setLanguageSwitch('rus')} style={{marginBottom: 0}}
                                              href="#action/3.3">
                                        <div
                                            className={languageSwitch === 'rus' ? 'selected-language selected-sign' : 'selected-sign'}/>
                                        Русский</Nav.Item>
                                </div>
                                <div className={'mobile-hot-container'}>
                                    <div className={'hot-number'}> ცხელი ხაზი</div>
                                    <div className={'mobile-hot-logo-number'}>
                                        <img src={mobile_phone} width={24} height={24} alt=''/>
                                        <div><a href="tel:2991991">991 991</a></div>
                                    </div>
                                </div>
                            </div>

                        </Offcanvas.Body>
                    </Offcanvas>
                </>


                :
                <></>
            }
            {/*
            <ReactDimmer isOpen={isMenuOpen} exitDimmer={setMenu} zIndex={100}/>
*/}

        </>


    );
}

/*
    <Nav
        activeKey="/"
    >
        <Nav.Item>
            <Nav.Link as={Link} to="/students">Students</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to="/teachers">Teachers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to="/groups">Groups</Nav.Link>
        </Nav.Item>
    </Nav>
*/
/*
<div>
    <div className={'mobile-nav'}>
        <div className={'head'}>
            <div className={'gradient'}/>
            <div className={'logo-menu'}>
                <img id='footer-unisonLogo' src={footer_unisonLogo} alt=''/>
                <img id='mobile-menu' src={mobile_menu} onClick={handleMenu} alt=''/>
            </div>

        </div>

    </div>
    <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
        <div className={'mobile-menu-container'}>
            <div className={'logo-exit'}>
                <img id='mobile-logo' src={mobile_logo} alt=''/>
                <img id='mobile-exit' src={mobile_exit} onClick={handleMenu} alt=''/>
            </div>
            <Nav.Link className={'my-office'} as={Link} to="/home" style={{padding: 0, marginRight: 0}}>
                <img src={profile} alt=""/>
                <div>ჩემი<br/>კაბინეტი</div>
            </Nav.Link>
        </div>
    </div>

</div>*/


export default Navigation;