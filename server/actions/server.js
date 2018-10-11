const seasons = require("./seasons.js");
const characters = require("./characters");
const info = require("./generalInfo");
const comics = require("./comics");
const books = require("./books");
const episodes = require("./episodes");

const express = require("express");
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/", (req, res) => res.send("Welcome to The Walking Dead API! Copyright by Kristina Butkovic"));


app.get("/books", (req, res) => res.send(JSON.stringify(books.books)));

app.get("/books/:id", (req, res) => {
    const id = req.params.id;
    let parsedId = Number(id);
    let filteredBook = books.books.filter(book => book.id === parsedId);
    res.send(filteredBook[0]); 
});

app.get("/characters", (req, res) => res.send(JSON.stringify(characters.characters)));

app.get("/characters/:id", (req, res) => {
    const id = req.params.id;
    let parsedId = Number(id);
    const myCharacters = [];
    characters.characters[0].main_characters.map((c) => myCharacters.push(c));
    characters.characters[1].supporting_cast.map(c => myCharacters.push(c))
    let filteredCharacter = myCharacters.filter(char => char.id === parsedId);
    res.send(filteredCharacter[0]);
});

app.get('/comics', (req, res) => res.send(JSON.stringify(comics.comics)));

app.get('/comics/volumes/:id', (req, res) => {
    const id = req.params.id;
    let parsedId = Number(id);
    let filteredComic = comics.comics.volumes.filter(comic => comic.id === parsedId);
    res.send(filteredComic[0]);
}); 

app.get('/episodes', (req, res) => res.send(JSON.stringify(episodes.episodes)));

app.get('/episodes/:id', (req, res) => {
    const id = req.params.id;
    let parsedId = Number(id);
    let filteredEpisode = episodes.episodes.filter(ep => ep.ep === parsedId);
    res.send(filteredEpisode[0]);
}); 

app.get('/info', (req, res) => res.send(JSON.stringify(info.info)));

app.get("/seasons", (req, res) => res.send(JSON.stringify(seasons.seasons)));

app.get('/seasons/:id', (req, res) => {
    const id = req.params.id;
    let parsedId = Number(id);
    let filteredSeason = seasons.seasons.filter(season => {
        let seasonNum = Number(season.num.slice(0,1));
        return seasonNum === parsedId;
    });
    res.send(filteredSeason[0]);
});

app.listen(8080, () => {
console.log("Server is running on port: 8080");
});