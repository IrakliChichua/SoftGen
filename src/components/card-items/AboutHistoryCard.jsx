import React from 'react';

function AboutHistoryCard({img}) {

    return (
        <div className={"card-body"}>
            <div className={"text-box"}>
                <div className={'text-box-background'}/>
                <p>
                    უნისონი დაარსდა და საერთაშორისო გადამზღვევ კომპანიებთან ურთიერთობამ, საშუალება მოგვცა პირველივე
                    დღიდან წარმოგვედგინა პროდუქციის მრავალფეროვანი სპექტრი
                </p>
            </div>
            <img src={img} alt=''/>
        </div>
    );
}

export default AboutHistoryCard;