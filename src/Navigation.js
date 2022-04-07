import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./nav.css"

function Navigation() {
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
                    <NavDropdown title="ქართული">
                        <NavDropdown.Item href="#action/3.1">ქართული</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
                    </NavDropdown>
                    <div>
                        <Navbar.Text id="hot">ცხელი ხაზი</Navbar.Text>
                        <Navbar.Text id="number"> 2 991 991</Navbar.Text>
                    </div>
                </div>
            </Navbar>
            <div className={'lower-nav'}>
                <Nav className={'lower-nav-nav'} activeKey="/">
                    <Nav.Link as={Link} to="/home">
                        {/*<img src="images/Logo.svg" alt="logo"/>*/}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/home">ჩვენს შესახებ</Nav.Link>
                    <Nav.Link as={Link} to="/home">სიახლეები</Nav.Link>
                    <Nav.Link as={Link} to="/home">პარტნიორები</Nav.Link>
                    <Nav.Link as={Link} to="/home" style={{padding: 0}}>კონტაქტი</Nav.Link>
                </Nav>
            </div>
            <div className={'phone'}>

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