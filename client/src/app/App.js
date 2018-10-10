import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import CharactersList from './components/CharactersList';
import SingleCharacter from './components/SingleCharacter';
import ComicsList from './components/ComicsList';
import Footer from './partials/Footer';
import Header from './partials/Header';
import Home from './components/Home';
import SeasonsList from './containers/SeasonsList';
import SingleSeason from './containers/SingleSeason';


const App = (props) => {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/characters/:id" component={SingleCharacter} />
        <Route path="/characters" component={CharactersList} />
        <Route path="/comics" component={ComicsList} />
        <Route path="/home" component={Home} />
        <Route path="/seasons/:id" component={SingleSeason} />
        <Route path="/seasons" component={SeasonsList} />
        <Redirect from="/" to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
