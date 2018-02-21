import React, { Component } from 'react';
import  { connect } from 'react-redux'; // the glue between react and redux
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

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
	// Wherever is returned will show up as props
	// inside of BookList
	return {
		books: state.books,
	};
}
// Anything returned from this function will end up as props
// on  the Booklist container 
function mapDisatchToProps(dispatch) {
	// Wherever selectBook is called, the result should be
	// passed to all our reducers
	return bindActionCreators({ selectBook }, dispatch);
}

// Connect produces the container
export default connect(mapStateToProps, mapDisatchToProps)(BookList);