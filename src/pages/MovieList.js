import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
    this.fetchMovies = this.fetchMovies.bind(this); /// faz a função fetchMovies ser vista pelo react
  }

  componentDidMount() { // faz a função ser chamada ao montar os componentes
    this.fetchMovies();
  }

  async fetchMovies() { // função assincrona que faz a requisição na api
    const filmes = await movieAPI.getMovies();
    this.setState({
      loading: false,
      movies: filmes,
    });
  }

  render() {
    const { movies, loading } = this.state;
    const addCard = <Link to="/movies/new">ADICIONAR CARTÃO</Link>;

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : addCard}
        {/*
        o loading tem o estado de false por default e só é trocado quando a função da api
        é executada no momento dela (assincrona) como quando isso acontece a função muda o estado
        do loading para falso o que faz renderizar o addCard
        */}
        {movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
        {/* map padrão para fazer a renderização dos filmes */}
      </div>
    );
  }
}

export default MovieList;
