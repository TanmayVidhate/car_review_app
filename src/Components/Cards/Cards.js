import React from "react";
import "./Cards.css";
const Cards=({imgurl,name,desc})=>{
    return(
        <>
            <div className="cards">
                <img src={imgurl} alt="carimage" className="cardimg"/>
                <p className="card_title">{name}</p>
                <p className="card_desc">{desc}</p>
                <div className="btn-holder">
                <button className="btn">Read More</button>
                </div>
            </div>
        </>
    )
}
export default Cards;