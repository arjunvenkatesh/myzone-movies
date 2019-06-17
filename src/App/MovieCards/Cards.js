import React, { Component } from 'react';
import Card from './Card/Card'
import './Cards.scss';

class Cards extends Component {
  
  render() {
    if (this.props.pageData) {
      let movies = this.props.pageData.data.Search;

      return (
        <div className="cards">
          <div className="cards__body">
            {
              movies.map(movie => (
                <div className="cards__card" key={movie.imdbID}>
                  <Card movie={movie} key={movie.imdbID} />
                </div>
              ))
            }
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default Cards;