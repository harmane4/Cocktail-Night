const { Schema, model } = require("mongoose");

const cocktailSchema = new Schema({
  strDrink: {
    type: String,
  },
  idDrink: {
    type: String,
  },
  strIngredient1: {
    type: String,
  },
  strIngredient2: {
    type: String,
  },
  strIngredient3: {
    type: String,
  },
  strIngredient4: {
    type: String,
  },
  strMeasure1: {
    type: String,
  },
  strMeasure2: {
    type: String,
  },
  strMeasure3: {
    type: String,
  },
  strMeasure4: {
    type: String,
  },
  strInstructions: {
    type: String,
  },
  strDrinkThumb: {
    type: String,
  },
});

const Cocktail = model("Cocktail", cocktailSchema);

module.exports = cocktailSchema;
