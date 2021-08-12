import React from "react";
import { GET_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";

export default function SavedCocktail() {
  const { loading, data } = useQuery(GET_ME);

  console.log(data);

  const userData = data?.userData || [];

  console.log(userData);

  if (loading) {
    return <h2>Loading cocktail</h2>;
  }

  console.log(userData);

  const drink = data.me.cocktail.strDrink;
  const ingredient1 = data.me.cocktail.strIngredient1;
  const ingredient2 = data.me.cocktail.strIngredient2;
  const ingredient3 = data.me.cocktail.strIngredient3;
  const ingredient4 = data.me.cocktail.strIngredient4;
  const quantity1 = data.me.cocktail.strMeasure1;
  const quantity2 = data.me.cocktail.strMeasure2;
  const quantity3 = data.me.cocktail.strMeasure3;
  const quantity4 = data.me.cocktail.strMeasure4;
  const instructions = data.me.cocktail.strInstructions;
  const drinkImage = data.me.cocktail.strDrinkThumb;

  return (
    <div className="randomCocktailContainer">
      {loading ? (
        <p>Loading Cocktail</p>
      ) : (
        <div>
          <h1 className="heading">YOUR SAVED COCKTAIL</h1>
          <img className="image" src={drinkImage} alt={drink}></img>
          <h2>COCKTAIL</h2>
          <p className="cocktailInfo">{drink}</p>
          <h2>INGREDIENTS & MEASUREMENTS</h2>
          <p className="cocktailInfo">
            {ingredient1} - {quantity1}
          </p>
          <p className="cocktailInfo">
            {ingredient2} - {quantity2}
          </p>
          <p className="cocktailInfo">
            {ingredient3} - {quantity3}
          </p>
          <p className="cocktailInfo">
            {ingredient4} - {quantity4}
          </p>

          <p className="cocktailInfo">{instructions}</p>
        </div>
      )}
    </div>
  );
}
