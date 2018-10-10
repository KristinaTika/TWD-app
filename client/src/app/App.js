import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import CharactersList from './components/CharactersList';
import SingleCharacter from './components/SingleCharacter';
import ComicsList from './components/ComicsList';


const App = (props) => {
    
    return (
      <div className="App">
        <Switch>
          <Route path="/characters/:id" component={SingleCharacter} />
          <Route path="/characters" component={CharactersList} />
          <Route path="/comics" component={ComicsList} />
          <Redirect from="/" to="/characters" />
        </Switch>
      </div>
    );
}

export default App;
