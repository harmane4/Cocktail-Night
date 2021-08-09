import React, { useState, useEffect } from "react";
import "./CocktailChoices.css";
var convert = require("convert-units");

export default function CocktailChoices() {
  const [cocktails, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log("cocktails", cocktails);

  convert(1).from("fl-oz").to("ml");

  useEffect(() => {
    randomCocktail();

    async function randomCocktail() {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      const cocktailData = data.drinks[0];
      console.log("cocktailData", cocktailData);

      setCocktail(cocktailData);
      setLoading(false);
    }
  }, []);

  return (
    <div className="randomCocktailContainer">
      <h1 className="heading">YOUR COCKTAIL</h1>
      <h2>COCKTAIL NAME</h2>
      {loading ? (
        <div>...loading</div>
      ) : (
        <img className="image" src={cocktails.strDrinkThumb}></img>
      )}
      {loading ? <div>..loading</div> : <p>{cocktails.strDrink}</p>}
      <h2>INGREDIENTS & MEASUREMENTS</h2>
      {loading ? (
        <div>..loading</div>
      ) : (
        <p>
          {cocktails.strIngredient1} - {cocktails.strMeasure1}
        </p>
      )}
      {loading ? (
        <div>..loading</div>
      ) : (
        <p>
          {cocktails.strIngredient2} - {cocktails.strMeasure2}
        </p>
      )}
      {loading ? (
        <div>..loading</div>
      ) : (
        <p>
          {cocktails.strIngredient3} - {cocktails.strMeasure3}
        </p>
      )}
      {loading ? (
        <div>..loading</div>
      ) : (
        <p>
          {cocktails.strIngredient4} - {cocktails.strMeasure4}
        </p>
      )}
      <h2>METHOD</h2>
      {loading ? <div>..loading</div> : <p>{cocktails.strInstructions}</p>}
    </div>
  );
}

{
  /* <li>Cocktail Name: {cocktail.drinks[0].strDrink} </li>
        <li>Ingredients: </li>
        <li>Method:</li>
        <li>Image:</li> */
}
