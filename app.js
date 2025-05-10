const express = require("express");
const passport = require("passport");
require("./auth")(passport);

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //req => request, la peticion
  //res =>response, la respuesta
  res.status(200).send("Hello World!");
});

app.post("/login", (req, res) => {
  res.status(200).json({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30",
  });
});

app.post("/team/pokemons", () => {
  res.status(200).send("Hello World");
});

app.get(
  "/team",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.status(200).send("Hello World");
  }
);

app.delete("/team/pokemons/:pokeid", () => {
  res.status(200).send("Hello World");
});

app.put("/team", () => {
  res.status(200).send("Hello World");
});

app.listen(port, () => {
  console.log("Server started at port " + port);
});

exports.app = app;
