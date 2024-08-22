import React from "react";
import "./Cards.css";
import { THEME } from "../../config/data";
const Cards=({imgurl,name,desc})=>{
    return(
        <>
            <div className="cards">
                <img src={imgurl} alt="carimage" className="cardimg"/>
                <p className="card_title" style={{color:THEME.Highlight}}>{name}</p>
                <p className="card_desc">{desc}</p>
                <div className="btn-holder">
                <button className="btn" style={{background:THEME.Secondary,color:THEME.Tertiary}}>Read More</button>
                </div>
            </div>
        </>
    )
}
export default Cards;