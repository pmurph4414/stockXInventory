import React from 'react';
import Shoe from './Shoe';
import {PropTypes} from 'prop-types';
import ShoeForm from './ShoeForm';


class ShoeStyle extends React.Component {
	static propTypes = {
    	shoes: PropTypes.array.isRequired,
    	title: PropTypes.string.isRequired
  }

  state = {
    openShoeForm: false
  }

  openShoeForm = () => {
    this.setState({
        openShoeForm: !this.state.openShoeForm
    })
  }

  render() {
  	const shoes = this.props.shoes;

  	return (
  		<div className="shoe-style">
        <h2 className="shoe-style-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="shoe-grid-items">
            {shoes.map((shoe, index) => 
              (<Shoe 
                shoe={shoe} 
                key={index} />
            ))}
          </ol>
      	</div>
        <div className="shoe-add-btn">
          <div
            onClick={this.openShoeForm}>
            <p>Add a new shoe to your collection</p>
          </div>
          {
          this.state.openShoeForm && 
            <div>
              <ShoeForm />
            </div>
          } 
        </div>
      </div>
  	)
  }
}

export default ShoeStyle;