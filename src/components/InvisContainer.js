import React, {useEffect, useState} from 'react';
import {Dropdown, Nav} from "react-bootstrap";
import Health_and_safety from "../assets/images/Health_and_safety";
import Directions_car_filled from "../assets/images/Directions_car_filled";
import Flight_takeoff from "../assets/images/Flight_takeoff";
import {Link} from "react-router-dom";

export default InvisContainer;

function InvisContainer({number, header}) {

    const [showNavDropdown, setShowNavDropdown] = useState(0);
    const [length, setLength] = useState(0)

    function dropDownNumber(num) {
        return showNavDropdown === num;
    }

    function containerActive(number) {
        return length && setShowNavDropdown(number);
    }

    useEffect(() => {
        setLength(document.getElementsByClassName("invisible-container active").length);
    }, [showNavDropdown])

    return (
        <div
            className={`invisible-container ${showNavDropdown === number ? 'active' : ''}`}
            onMouseOver={() => containerActive(number)}
            onMouseOut={() => setShowNavDropdown(0)}>
            <Dropdown className=" mx-2" show={dropDownNumber(number)}>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">
                        <Health_and_safety/>
                        ინდივიდუალური ჯანმრთელობის დაზღვევა
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                        <Directions_car_filled/>
                        ავტოდაზღვევა - პაკეტები
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                        <Directions_car_filled/>
                        მძღოლის პასუხისმგებლობის დაზღვევა
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                        <Flight_takeoff/>
                        სამოგზაურო დაზღვევა
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Nav.Link as={Link} onMouseEnter={() => setShowNavDropdown(number)}
                      to="/home"><>{header}</></Nav.Link>
        </div>
    );
}
