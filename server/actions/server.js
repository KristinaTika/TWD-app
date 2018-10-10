const express = require("express");
const seasons = require("./seasons.js");
const characters = require("./characters");
const info = require("./generalInfo");
const comics = require("./comics");
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/", (req, res) => {
    res.send("Welcome to The Walking Dead API! Copyright by Kristina Butkovic");
});

app.get('/info', (req, res) => res.send(JSON.stringify(info.info)));

app.get("/seasons", (req, res) => res.send(JSON.stringify(seasons.seasons)));

app.get("/characters", (req, res) => res.send(JSON.stringify(characters.characters)));

app.get("/characters/:id", (req, res) => {
    const id = req.params.id;
    let parsedId = Number(id);
    let filteredCharacter = characters.characters[0].main_characters.filter(char => char.id === parsedId);
    res.send(filteredCharacter);
});

app.get('/comics', (req, res) => {
    res.send(JSON.stringify(comics.comics));
})

app.listen(8080, () => {
    console.log("Server is running on port: 8080");
});

