import React from 'react';

function FlightTakeoff(props) {
    return (
        <svg id="flight_takeoff_black_48dp" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="0 0 48 48">
            <defs>
                <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1"
                                gradientUnits="objectBoundingBox">
                    <stop offset="0" stop-color="#58b0e3"/>
                    <stop offset="1" stop-color="#005287"/>
                </linearGradient>
            </defs>
            <path id="Path_28" data-name="Path 28" d="M0,0H48V48H0Z" fill="none"/>
            <path id="Path_29" data-name="Path 29"
                  d="M3.16,34.43h38v4h-38ZM42.3,15.71a2.993,2.993,0,0,0-3.68-2.12L28,16.43,14.2,3.57,10.34,4.59l8.28,14.34L8.68,21.59,4.74,18.51l-2.9.78,5.18,8.98,33.14-8.86a3.044,3.044,0,0,0,2.14-3.7Z"
                  transform="translate(1.84 3.57)" fill="url(#linear-gradient)"/>
        </svg>
    );
}

export default FlightTakeoff;