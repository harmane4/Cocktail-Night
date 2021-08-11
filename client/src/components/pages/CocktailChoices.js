import React, { useState, useEffect } from "react";
import "./CocktailChoices.css";
import { SAVE_COCKTAIL } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

export default function CocktailChoices() {
  const [cocktail, setCocktail] = useState({
    idDrink: "",
    strDrink: "",
    strIngredient1: "",
    strIngredient2: "",
    strIngredient3: "",
    strIngredient4: "",
    strMeasure1: "",
    strMeasure2: "",
    strMeasure3: "",
    strMeasure4: "",
    strInstructions: "",
    strDrinkThumb: "",
  });
  const [loading, setLoading] = useState(true);

  const [saveCocktail, { data, error }] = useMutation(SAVE_COCKTAIL);

  const handleButtonClick = async () => {
    console.log("cocktail", cocktail);
    try {
      saveCocktail({ variables: cocktail });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    randomCocktail();
  }, []);

  async function randomCocktail() {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    const {
      idDrink,
      strDrink,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      strInstructions,
      strDrinkThumb,
    } = data.drinks[0];
    // I want all of this cocktailData (cocktails) saved to my saveCocktail mutation. Which will then update the user.

    setCocktail({
      idDrink,
      strDrink,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      strInstructions,
      strDrinkThumb,
    });
    setLoading(false);
  }

  return (
    <div className="randomCocktailContainer">
      <button onClick={randomCocktail} className="chooseAgainButton">
        Bartender's Choice
      </button>
      <h1 className="heading">YOUR COCKTAIL</h1>

      <button onClick={handleButtonClick} className="saveCocktailButton">
        Save Cocktail
      </button>

      {/* <button className="saveCocktailButton">Save Cocktail</button> */}
      <h2>COCKTAIL</h2>
      {loading ? (
        <div>...loading</div>
      ) : (
        <img
          className="image"
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
        ></img>
      )}
      {loading ? <div>..loading</div> : <p>{cocktail.strDrink}</p>}
      <h2>INGREDIENTS & MEASUREMENTS</h2>
      {loading ? (
        <div>..loading</div>
      ) : (
        <p className="cocktailInfo">
          {cocktail.strIngredient1} - {cocktail.strMeasure1}
        </p>
      )}
      {loading ? (
        <div>..loading</div>
      ) : (
        <p className="cocktailInfo">
          {cocktail.strIngredient2} - {cocktail.strMeasure2}
        </p>
      )}
      {loading ? (
        <div>..loading</div>
      ) : (
        <p className="cocktailInfo">
          {cocktail.strIngredient3} - {cocktail.strMeasure3}
        </p>
      )}
      {loading ? (
        <div>..loading</div>
      ) : (
        <p className="cocktailInfo">
          {cocktail.strIngredient4} - {cocktail.strMeasure4}
        </p>
      )}
      <h2>METHOD</h2>
      {loading ? (
        <div>..loading</div>
      ) : (
        <p className="cocktailInfo">{cocktail.strInstructions}</p>
      )}
    </div>
  );
}
