import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index';

// todo esse projeto foi feito por meio de um pré-planejamento mas conhecido como arquitetura de software
// https://www.notion.so/beedeveloper/Projeto-Movie-Cards-Library-CRUD-71bd963c46a74e74ac3e4fcda38254bd
// o link acima e o guia de implementação e o fluxograma de autoria de Rogerio P. da Silva e Matheus Duarte de Freitas
// com auxilio na área de desenvolvimento de Josué Lobo, Matheus Camilo e Rafael Janovicci

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
