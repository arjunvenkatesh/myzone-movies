import React, { Component } from 'react';
import './Pagination.scss';

class Pagination extends Component {

	constructor(props) {
		super(props);
		this.changePage = this.changePage.bind(this);
	}

	changePage(event) {
		this.props.requestPageData(
			{
				pageNumber: event.target.innerHTML	
			}
		);
	}

	render() {
		if (this.props.paginationData) {
			
			let totalResults = this.props.paginationData.data.totalResults;
			let pages = Math.ceil(totalResults / 10);
			let items = Array.from({ length: pages }, (v, k) => k + 1);

			return (
				<div className="pagination">
				{	
					items.map(item => (
						<span className="pagination__page" key={item} onClick={this.changePage} >
							{item}
						</span>
					))
				}
				</div>
			);
		}
		else {
			return (
				<div></div>
			);
		}
	}
}

export default Pagination;