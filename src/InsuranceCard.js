import FlightTakeoff from "./images/Flight_takeoff";
import React, {useState} from "react";

const InsuranceCard = ({text,svg}) =>{
    const [active, setActive]=useState(false)
    return (
        <div className={'insurance-card-body'} onMouseOver={() => setActive(true)}
             onMouseOut={()=>setActive(false)}>
            {svg}
            <div> {text}</div>
            <div className={active && 'insurance-card-hover-box'}
                 style={{fontSize: 16}}> {active &&  'შეიძინე'} </div>
        </div>
    );
}
export default InsuranceCard;