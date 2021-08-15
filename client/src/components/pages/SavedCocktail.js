import React from "react";
import { GET_ME } from "../../utils/queries";
import { REMOVE_COCKTAIL } from "../../utils/mutations";
import { useMutation, useQuery } from "@apollo/client";

export default function SavedCocktail() {
  // Query to get user data
  const { loading, data } = useQuery(GET_ME);

  const [deleteCocktail, { error }] = useMutation(REMOVE_COCKTAIL);

  // Message when page is loading API data
  if (loading) {
    return <h2>Loading cocktail</h2>;
  }

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

  // TODO: Delete cocktail function
  // const handleDeleteCocktail = async () => {
  //   try {
  //     const { data } = await deleteCocktail({
  //       variables: "",
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <div className="randomCocktailContainer">
      {/* <button onClick={handleDeleteCocktail} className="buttonStyle">
        Delete cocktail
      </button> */}
      {loading ? (
        <p>Loading Cocktail</p>
      ) : (
        <div>
          <h1 className="heading">YOUR SAVED COCKTAIL</h1>
          <img className="image" src={drinkImage} alt={drink}></img>
          <h2>COCKTAIL</h2>
          <p className="cocktailInfo">{drink}</p>
          <h2>INGREDIENTS</h2>
          <p className="cocktailInfo">
            {ingredient1} {quantity1}
          </p>
          <p className="cocktailInfo">
            {ingredient2} {quantity2}
          </p>
          <p className="cocktailInfo">
            {ingredient3} {quantity3}
          </p>
          <p className="cocktailInfo">
            {ingredient4} {quantity4}
          </p>

          <p className="cocktailInfo">{instructions}</p>
        </div>
      )}
    </div>
  );
}
