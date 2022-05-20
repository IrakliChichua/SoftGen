import React from 'react';
import "../../sass/about.scss"
import about_page_ellipse from "../../assets/images/svg/about_page_ellipse.svg"
import about_background_2 from "../../assets/images/svg/about_background_2.svg"
import about_history_img_1 from "../../assets/images/png/about_history_img_1.png"
import about_today_card_img_1 from "../../assets/images/png/about_today_card_img_1.png"
import about_today_card_img_2 from "../../assets/images/png/about_today_card_img_2.png"
import about_today_card_img_3 from "../../assets/images/png/about_today_card_img_3.png"
import About_Today_Rectangle_1 from "../../assets/images/png/About_Today_Rectangle_1.png"
import About_Today_Rectangle_2 from "../../assets/images/png/About_Today_Rectangle_2.png"
import About_Today_Rectangle_3 from "../../assets/images/png/About_Today_Rectangle_3.png"
import doc from "../../assets/images/svg/doc.svg"
import SlickSlider from "../../components/SlickSlider";
import {FormSelect} from "react-bootstrap";
import DownloadSign from "../../assets/images/Download_sign";
import AnnualAccountCard from "../../components/card-items/AnnualAccountCard";

function About(props) {
    return (
        <div className={"about-page"}>
            <div className={"navigation-background"}/>
            <div className={'red-line'}>
                <div className={'text'}>ჩვენს შესახებ</div>
            </div>
            <div className={"about-background"}>
                <img src={about_page_ellipse} alt='' className={"ellipse"}/>
                <img src={about_background_2} alt='' className={"background-2"}/>
                <div className={"info"}><p>სადაზღვევო კომპანია „უნისონი“ დაფუძნდა 2011 წელს და დროის მცირე მონაკვეთში
                    ქართული
                    სადაზღვევო ბაზრის ერთ-ერთი თვალსაჩინო მოთამაშედ იქცა. სადაზღვევო სფეროში, მენეჯმენტის მრავალწლიანი
                    გამოცდილებითა და პროფესიონალიზმით, ძლიერი საერთაშორისო პარტნიორებითა და მრავალფეროვანი პროდუქტებით
                    „უნისონმა“ სწრაფად და ადვილად მოიპოვა მომხმარებლის ნდობა და ბაზრის სოლიდური წილი. უნისონი
                    წარმოადგენს
                    დამოუკიდებელ, სხვა ბიზნესებთან არააფილირებულ სადაზღვევო კომპანიას, რაც მომხმარებელს მეტი თავისუფალი
                    არჩევანის საშუალებას აძლევს. უნისონი მომხმარებელს სთავაზობს მაღალი ხარისხის მომსახურებას,
                    პროვაიდრების
                    თავისუფალ არჩევანსა და კონკურენტუნარიან ფასებს.</p>
                </div>
                <div className={"history"}>
                    <h2> უნისონის ისტორია</h2>
                    <SlickSlider/>
                </div>
                <div className={"today"}>
                    <h2> უნისონი დღეს</h2>

                    <div className={'box'}>
                        <div className={"row_1"}>
                            <div className={"today_card"}>
                                <img  className={"background-image"}  src={About_Today_Rectangle_1} alt=''/>
                                <div className={"today_card_content"}>
                                    <img src={about_today_card_img_1} alt=''/>
                                    <h3>მისია</h3>
                                    <p>ჩვენი მისიაა ხელი შევუწყოთ ფინანსურ დაცულობასა და სტაბილურობას; თქვენთან ერთად
                                        მუდმივად
                                        ვიზრუნოთ ცხოვრების გამარტივებასა და სიმშვიდეზე.</p>
                                </div>
                            </div>
                            <div className={"today_card"}>
                                <img className={"background-image"} src={About_Today_Rectangle_2} alt=''/>
                                <div className={"today_card_content"}>
                                    <img src={about_today_card_img_2} alt=''/>
                                    <h3>სტანდარტი</h3>
                                    <div className={"list-container"}>
                                        <ul>
                                            <li>პროფესიონალიზმი</li>
                                            <li>განვითარება</li>
                                            <li>სიძლიერე</li>
                                        </ul>
                                        <ul>
                                            <li>პროფესიონალიზმი</li>
                                            <li>განვითარება</li>
                                            <li>სიძლიერე</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={"row_2"}>
                            <div className={"today_card"}>
                                <img className={"background-image"}  src={About_Today_Rectangle_3} alt=''/>
                                <div className={"today_card_content"}>
                                    <img src={about_today_card_img_3} alt=''/>
                                    <h3>ღირებულებები</h3>
                                    <p>ჩვენ ვქმნით კომპანიას, რომელიც მაღალპროფესიონალური სადაზღვევო სერვისებითა და
                                        ურთიერთობის გამორჩეული სტილით, თქვენი გრძელვადიანი და სანდო პარტნიორია.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={"annual"}>
                    <h2>წლიური ანგარიშები</h2>
                    <div className={"search"}>
                        <FormSelect>
                            <option>2022</option>
                            <option value="1">2021</option>
                            <option value="2">2020</option>
                            <option value="3">2019</option>
                        </FormSelect>
                    </div>

                    <div className={"cards-box"}>
                        <AnnualAccountCard h4="I კვარტალი" p="2021 წელი"/>
                        <AnnualAccountCard h4="II კვარტალი" p="2021 წელი"/>
                        <AnnualAccountCard h4="II კვარტალი" p="2021 წელი"/>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default About;