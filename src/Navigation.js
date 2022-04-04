import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <Navbar collapseOnSelect  bg="dark" variant="dark" style={{ height: "49px" }}>
            <Container>
                    <Nav activeKey="/" className="me-auto">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/home">მთავარი</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/home">ჩვენს შესახებ</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/home">სიახლეები</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/home">პარტნიორები</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/home">კონტაქტი</Nav.Link>
                        </Nav.Item>

                    </Nav>
                    <Nav>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Navbar.Text>ცხელი ხაზი</Navbar.Text>
                        <Navbar.Text>2 991 991</Navbar.Text>
                    </Nav>
            </Container>
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