import React, {useEffect, useState} from 'react';
import {Container, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./nav.css"
import logo from "./images/logo.svg"
import shopping_cart from "./images/shopping_cart.svg"
import profile from "./images/profile.svg"
import phone from "./images/phone.svg"
import mobile_menu from "./images/mobile_menu.svg"
import mobile_logo from "./images/mobile_logo.svg"
import mobile_exit from "./images/mobile_exit.svg"
import mobile_profile from "./images/mobile_profile.svg"
import shield from "./images/shield.svg"
import briefcase from "./images/briefcase.svg"
import footer_unisonLogo from "./images/footer_unisonLogo.svg"
import WindowDimensions from "./WindowDimensions";


function Navigation() {

    const [showDropdown, setShowDropdown] = useState(false);
    const [isMenuOpen, setMenu] = useState(false);
    const [width, height] = WindowDimensions()

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
                        <NavDropdown title="ქართული"
                                     id="collasible-nav-dropdown"
                                     show={showDropdown}
                                     onMouseLeave={() => setShowDropdown(false)}
                                     onMouseOver={() => setShowDropdown(true)}>
                            <NavDropdown.Item href="#action/3.1">ქართული</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
                        </NavDropdown>
                        <div className={'hot-number'}>
                            <Navbar.Text id="hot">ცხელი ხაზი</Navbar.Text>
                            <Navbar.Text id="number"> 2 991 991</Navbar.Text>
                        </div>
                    </div>
                </Navbar>
                <div className={'lower-nav'}>
                    <Nav className={'lower-nav-nav'} activeKey="/">
                        <div className={'left'}>
                            <Nav.Link as={Link} to="/home">
                                <img id={'unison-logo'} src={logo} alt=""/>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/home">ფიზიკური<br/>პირებისთვის</Nav.Link>
                            <Nav.Link as={Link} to="/home">იურიდიული<br/>პირებისთვის</Nav.Link>
                            <Nav.Link as={Link} to="/home">სავალდებულო<br/>დაზღვევა</Nav.Link>
                        </div>
                        <div className={'right'}>
                            <Nav.Link className={'buy-online-box'} as={Link} to="/home">
                                <img src={shopping_cart} style={{marginRight: 8}} alt=""/>
                                <div>შეიძინე ონლაინ</div>
                            </Nav.Link>
                            <Nav.Link className={'my-office'} as={Link} to="/home" style={{padding: 0, marginRight: 0}}>
                                <svg id="Component_8_11" data-name="Component 8 – 11" xmlns="http://www.w3.org/2000/svg"
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
                        </div>

                    </Nav>
                </div>
                <div className={'phone'}>
                    <img width="30.13" height="30.13" src={phone} alt=""/>
                    <div>აგენტთან<br/>დაკავშირება</div>
                </div>
            </div>


            {width < 1000 ?
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

                    <Offcanvas show={isMenuOpen} onHide={handleMenu}>
                        <Offcanvas.Header>
                            <img id='mobile-logo' src={mobile_logo} alt=''/>
                            <div className={'logo-exit'}>
                                <img id='mobile-exit' src={mobile_exit} onClick={handleMenu} alt=''/>
                            </div>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
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
                                        <div> ფიზიკური პირებისთვის</div>
                                        <div className={'mobile-arrow-right'}/>
                                    </div>
                                    <div className={'mobile-card-body'}>
                                        <img src={shield} alt=''/>
                                        <div> ფიზიკური პირებისთვის</div>
                                        <div className={'mobile-arrow-right'}/>
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