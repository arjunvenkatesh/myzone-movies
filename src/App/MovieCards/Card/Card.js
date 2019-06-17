import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {

  render() {
    let movie = this.props.movie;

    return (
      <div className="card" key={movie.imdbID}>
        <div className="card__poster" style ={ { backgroundImage: "url(" + movie.Poster + ")" } }  />
        <div className="card__details">
          <div className="card__title">{movie.Title}</div>
          <div className="card__year">{movie.Year}</div>
        </div>
      </div>
    );

  }
}

export default Card;