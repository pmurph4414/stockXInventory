import React from 'react';
import Shoe from './Shoe';
// import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';

class ShoeStyle extends React.Component {
	static propTypes = {
    	shoes: PropTypes.array.isRequired,
    	title: PropTypes.string.isRequired
  }

  render() {
  	const shoes = this.props.shoes;

  	return (
  		<div className="bookshelf">
	        <h2 className="bookshelf-title">{this.props.title}</h2>
	        <div className="bookshelf-books">
	          <ol className="books-grid">
	            {shoes.map((shoe, index) => (<Shoe shoe={shoe} key={index} />
	            ))}
	          </ol>
	      	</div>
        </div>
  	)
  }
}

export default ShoeStyle;