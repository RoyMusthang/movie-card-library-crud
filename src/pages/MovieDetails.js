import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      filme: {},
    };
    this.resolveGetMovie = this.resolveGetMovie.bind(this);
    this.deletarFilmes = this.deletarFilmes.bind(this);
  }

  componentDidMount() {
    this.resolveGetMovie();
  }

  async resolveGetMovie() {
    const { match: { params: { id } } } = this.props;
    const filme = await movieAPI.getMovie(id);
    this.setState({
      loading: false,
      filme: filme,
    });
  }

  // async deletarFilmes(id) {
  //   const filmeDeletado = await movieAPI.deleteMovie(id);
  // }

  montaDetalhes = () => {
    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      id,
    } = this.state.filme;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ title }</h1>
        <h2>{ `Subtitle: ${subtitle}` }</h2>
        <h4>{ `Storyline: ${storyline}` }</h4>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => this.deletarFilmes(id) }>DELETAR</Link>
      </div>

    );
  }

  render() {
    const { loading } = this.state;

    return (
      loading ? <Loading /> : this.montaDetalhes()
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
