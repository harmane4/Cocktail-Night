import React from "react";
import "./Home.css";
import cocktail1 from "../../assets/images/cocktail111.jpg";
import cocktail2 from "../../assets/images/cocktail222.jpg";
import cocktail3 from "../../assets/images/cocktail333.jpg";

export default function Home() {
  return (
    <div>
      <div className="column">
        <img className="img" src={cocktail2} alt="cocktail"></img>
      </div>
      <div className="column">
        <img className="img" src={cocktail1} alt="cocktail"></img>
      </div>

      <div className="column">
        <img className="img" src={cocktail3} alt="cocktail"></img>
      </div>

      <h1 className="heroHeading">#COCKTAIL NIGHT</h1>
      <p className="heroText">Lorem epsum epsum epsum epsum epsum epsum</p>
    </div>
  );
}
