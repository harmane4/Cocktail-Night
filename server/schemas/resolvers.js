const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });
        return userData;
      }
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });

      if (!user) {
        throw new AuthenticationError("Something is wrong");
      }
      const token = signToken(user);
      return { token, user };
    },
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Can't find this user");
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError("Wrong password!");
      }

      const token = signToken(user);

      return { token, user };
    },
    saveCocktail: async (_, args, context) => {
      console.log("args", args);
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          {
            cocktail: {
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
            },
          },
          { new: true }
        );
        console.log("updatedUser", updatedUser);
        return updatedUser;
      }
      throw new AuthenticationError("Error");
    },
    // saveCocktail: async (_, args, context) => {
    //   console.log("args", args);
    //   if (context.user) {
    //     const updatedUser = await User.findByIdAndUpdate(
    //       { _id: context.user._id },
    //       {
    //         cocktail: {
    //           idDrink,
    //           strDrink,
    //           strIngredient1,
    //           strIngredient2,
    //           strIngredient3,
    //           strIngredient4,
    //           strMeasure1,
    //           strMeasure2,
    //           strMeasure3,
    //           strMeasure4,
    //           strInstructions,
    //           strDrinkThumb,
    //         },
    //       },
    //       { new: true }
    //     );
    //   }
    //   console.log("updatedUser", updatedUser);
    //   return updatedUser;
    // },
  },
};

module.exports = resolvers;
