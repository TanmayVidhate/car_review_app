import React from "react";
import "./Home.css";
import Cards from "../../Components/Cards/Cards.js";
import { MAIN_TITLE,CARS,SUBTITLE } from "../../config/data.js";


const Home = () => {
    return (
        <>
            <p className="heading">{MAIN_TITLE}<span>{SUBTITLE}</span></p>
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