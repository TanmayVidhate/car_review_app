import React from "react";
import "./Cards.css";
const Cards=({imgurl,name,desc})=>{
    return(
        <>
            <div className="cards">
                <img src={imgurl} alt="carimage" className="cardimg"/>
                <p className="card_title">{name}</p>
                <p className="card_desc">{desc}</p>
            </div>
        </>
    )
}
export default Cards;