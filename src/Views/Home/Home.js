import React from "react";
import "./Home.css";
import Cards from "../../Components/Cards/Cards.js";
import { MAIN_TITLE,CARS,SUBTITLE,THEME } from "../../config/data.js";


const Home = () => {
    return (
        <>
            <p className="heading" style={{color:THEME.Tertiary}}>{MAIN_TITLE}<span style={{color:THEME.Secondary}}>{SUBTITLE}</span></p>
            <div className="card_container">
                {
                    CARS.map((carlist) => {
                        return<Cards
                        name={carlist.name}
                        desc={carlist.desc}
                        imgurl={carlist.imgurl}
                        />
                    })
                }
            </div>
        </>
    )
}
export default Home;