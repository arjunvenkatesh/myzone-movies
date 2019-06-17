import React, { Component } from 'react';
import './List.scss';

class List extends Component {

	render() {
		if (this.props.pageData) {
			let movies = this.props.pageData.data.Search;

			return (
				<div className="ListPage">
					<div className="list">
						<div className="list__header">
							<div className="list__column--title">Title</div>
							<div className="list__column--year">Year</div>
						</div>
						<div className="list__body">
							{
								movies.map(movie => (
									<div className="list__row" key={movie.imdbID}>
										<div className="list__title">{movie.Title}</div>
										<div className="list__year">{movie.Year}</div>
									</div>
								))
							}
						</div>
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

export default List;