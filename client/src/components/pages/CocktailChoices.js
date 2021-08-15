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
  // Setting state for loading
  const [loading, setLoading] = useState(true);
  // Mutation to save a cocktail to a user
  const [saveCocktail] = useMutation(SAVE_COCKTAIL);
  // Setting state for the save cocktail submit button
  const [submitButtonMessage, setSubmitButtonMessage] = useState(false);

  const handleButtonClick = async () => {
    try {
      await saveCocktail({
        variables: { cocktail },
      });
    } catch (err) {
      console.error(err);
    }
    successMessage();
  };
  // Function to show a message when the save cocktail button is clicked
  function successMessage() {
    setSubmitButtonMessage("Cocktail Saved!");
  }

  function viewSavedCocktail() {
    window.location.assign("/saved");
  }

  useEffect(() => {
    randomCocktail();
  }, []);

  // Function that generates a random cocktail from an API call
  async function randomCocktail() {
    setSubmitButtonMessage(false);
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
      <button onClick={randomCocktail} className="buttonStyle">
        Bartender's Choice
      </button>

      <h1 className="heading">YOUR COCKTAIL</h1>

      <button onClick={handleButtonClick} className="saveCocktailButton">
        Save Cocktail
      </button>

      <h2>COCKTAIL</h2>

      <p className="submitButtonMessage">{submitButtonMessage}</p>
      {loading ? (
        <div>..loading</div>
      ) : (
        <p className="cocktailInfo">{cocktail.strDrink}</p>
      )}
      {loading ? (
        <div>...loading</div>
      ) : (
        <img
          className="image"
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
        ></img>
      )}

      <h2>INGREDIENTS </h2>
      {loading ? (
        <div>..loading</div>
      ) : (
        <p className="cocktailInfo">
          {cocktail.strIngredient1} {cocktail.strMeasure1}
        </p>
      )}
      {loading ? (
        <div>..loading</div>
      ) : (
        <p className="cocktailInfo">
          {cocktail.strIngredient2} {cocktail.strMeasure2}
        </p>
      )}
      {loading ? (
        <div>..loading</div>
      ) : (
        <p className="cocktailInfo">
          {cocktail.strIngredient3} {cocktail.strMeasure3}
        </p>
      )}
      {loading ? (
        <div>..loading</div>
      ) : (
        <p className="cocktailInfo">
          {cocktail.strIngredient4} {cocktail.strMeasure4}
        </p>
      )}
      <h2>METHOD</h2>
      {loading ? (
        <div>..loading</div>
      ) : (
        <p className="cocktailInfo">{cocktail.strInstructions}</p>
      )}
      <button onClick={viewSavedCocktail} className="viewSavedCocktailButton">
        View Saved Cocktail
      </button>
    </div>
  );
}
