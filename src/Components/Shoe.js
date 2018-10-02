import React from 'react';
// import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';

class Shoe extends React.Component {
	static propTypes = {
    	shoe: PropTypes.object.isRequired
  }

  render() {
  	const shoe = this.props.shoe;

  	return (
  		<div className="bookshelf">
	       <li>
          <div>
            <div>
              <div>
                <div 
                style={{
                  width: 200,
                  height: 150,
                  backgroundImage: `url("${shoe.image}")`
                }}>
                </div>
                <select>
                  <option value="add">Add</option>
                  <option value="edit">Edit</option>
                  <option value="remove">Remove</option>
                </select>
              </div>
            </div>
            <div className="book-title">{shoe.brand}</div>
            <div className="book-title">{shoe.image}</div>
            <div className="book-title">{shoe.style}</div>
            <div className="book-authors">{shoe.size}</div>
            <div className="book-authors">{shoe.upcid}</div>
          </div>
        </li>
      </div>
  	)
  }
}

export default Shoe;