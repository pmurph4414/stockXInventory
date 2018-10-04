import React from 'react';
import ShoeStyle from './ShoeStyle';
import {PropTypes} from 'prop-types';

class ShoeGrid extends React.Component {
	static propTypes = {
    	shoes: PropTypes.array.isRequired
  }

  render() {
  	const shoes = this.props.shoes;

  	return (
  		<div>
  			<div className="shoe-header-title">
	          <h1>StockX Inventory</h1>
	        </div>
	        <div className="shoe-grid">
	          <div>
	            <ShoeStyle shoes={shoes.filter((shoe) => (shoe.style === "basketball"))} title="Basketball" />
	            <ShoeStyle shoes={shoes.filter((shoe) => (shoe.style === "running"))} title="Running" />
	            <ShoeStyle shoes={shoes.filter((shoe) => (shoe.style === "walking"))} title="Walking" />
	            <ShoeStyle shoes={shoes.filter((shoe) => (shoe.style === "tennis"))} title="Tennis" />
	            <ShoeStyle shoes={shoes.filter((shoe) => (shoe.style === "crosstrainers"))} title="Cross Trainers" />
	          </div>
	        </div>
      </div>
  	)
  }
}

export default ShoeGrid;