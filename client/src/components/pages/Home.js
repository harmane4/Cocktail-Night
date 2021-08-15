import React from "react";
import "./Home.css";
import cocktail1 from "../../assets/images/cocktail1.jpg";
import cocktail2 from "../../assets/images/cocktail2.jpg";
import cocktail3 from "../../assets/images/cocktail3.jpg";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

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
      <div className="textContainer">
        <h3 className="subHeading">
          Cocktail recipes at the click of a{" "}
          {Auth.loggedIn() ? (
            <Link to="/cocktails">
              <button className="btn41-43 btn-43">BUTTON</button>
            </Link>
          ) : (
            <div>
              <Link to="/signup">
                <button className="btn41-43 btn-43">BUTTON</button>
              </Link>

              <p className="heroText">Login or Signup to get started</p>
            </div>
          )}
        </h3>
      </div>
    </div>
  );
}
