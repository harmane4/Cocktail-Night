require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./config/connection");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");

const expressServer = express();
const PORT = process.env.PORT || 3001;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

apolloServer.applyMiddleware({ app: expressServer });

expressServer.use(express.urlencoded({ extended: true }));
expressServer.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  expressServer.use(express.static(path.join(__dirname, "../client/build")));
}

expressServer.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  expressServer.listen(PORT, () =>
    console.log(`🌍 Now listening on localhost:${PORT}`)
  );
  console.log(
    `Use GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`
  );
});
