import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./nav.css"

function Navigation() {
    return (
        <Navbar variant="dark">
            <Nav activeKey="/">
                <Nav.Link as={Link} to="/home" style={{width: 70}}>მთავარი</Nav.Link>
                <Nav.Link as={Link} to="/home" style={{width: 117}}>ჩვენს შესახებ</Nav.Link>
                <Nav.Link as={Link} to="/home" style={{width: 87}}>სიახლეები</Nav.Link>
                <Nav.Link as={Link} to="/home" style={{width: 109}}>პარტნიორები</Nav.Link>
                <Nav.Link as={Link} to="/home" style={{width: 78}}>კონტაქტი</Nav.Link>
            </Nav>
            <NavDropdown title="ქართული">
                <NavDropdown.Item href="#action/3.1">ქართული</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
            </NavDropdown>
            <Navbar.Text id="hot">ცხელი ხაზი</Navbar.Text>
            <Navbar.Text id = "number"> 2 991 991</Navbar.Text>
        </Navbar>
    );
}

/*<Nav
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
</Nav>*/

export default Navigation;