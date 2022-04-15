import React, {useState} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./nav.css"
import logo from "./images/logo.svg"
import shopping_cart from "./images/shopping_cart.svg"
import profile from "./images/profile.svg"
import phone from "./images/phone.svg"
import profile_hover from "./images/profile_hover.svg"

function Navigation() {


    const [showDropdown, setShowDropdown] = useState(false);

    return (
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
                            <img src={profile}
                                 onMouseOver={e => (e.currentTarget.src = profile_hover)}
                                 onMouseOut={e => (e.currentTarget.src = profile)}
                                  alt=""/>
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

export default Navigation;