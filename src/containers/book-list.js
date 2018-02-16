import React, { Component } from 'react';
import  { connect } from 'react-redux'; // the glue between react and redux

class BookList extends Component {

	renderList() {
		return this.props.books.map( (book) =>{
			return (
				<li key={book.title} 
						className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

function mapStateToProps(state) { // state -> redux state
	// Wgerever is returned will show up as props
	// inside of BookList
	return {
		books: state.books,
	};
}

// Connect produces the container
export default connect(mapStateToProps)(BookList);