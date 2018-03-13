import React, { Component } from 'react';
import  { connect } from 'react-redux'; // the glue between react and redux
import { selectBook } from '../actions/index'; // Action creator
import { bindActionCreators } from 'redux'; // Function to sent the action to all reducers

class BookList extends Component {

	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} 
						onClick= {() => this.props.selectBook(book)}
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

/**
 * Maps redux state to props for BookList container
 * @param {Obj} state Redux state
 * @returns {Obj} props // Wherever is returned will show up as props
	// inside of BookList -> this.props
 */
function mapStateToProps(state) {
	const props = {
		books: state.books,
	};
	return props;
}

/**
 *  
 * @param {Obj} dispatch 
 * Anything returned from this function will end up as props
	 on the Booklist container. 
 * Wherever selectBook is called, the result should be
	 passed to all our reducers.
 */
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectBook }, dispatch); // ({actionCreator}, dispatch)
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it availibe as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);