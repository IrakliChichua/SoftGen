import React from 'react';
import doc from "../../assets/images/svg/doc.svg";
import DownloadSign from "../../assets/images/Download_sign";

function AnnualAccountCard({h4, p}) {
    return (
        <div className={"card"}>
            <img src={doc} alt=''/>
            <h4>{h4}</h4>
            <p>{p}</p>
            <div className={"download"}>
                <DownloadSign/>
                <p> გადმოწერა</p>
            </div>
        </div>
    );
}

export default AnnualAccountCard;