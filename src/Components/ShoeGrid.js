import React from 'react';
import ShoeForm from './ShoeForm';
import {PropTypes} from 'prop-types';

class ShoeGrid extends React.Component {
	static propTypes = {
		shoes: PropTypes.array.isRequired,
		onRemoveShoe: PropTypes.func.isRequired
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
	  		<div>
	  			<div className="shoe-header-title">
		          <h1>StockX Inventory</h1>
		        </div>
				<div className="shoe-add-btn">
				  <p onClick={this.openShoeForm}>Add a new shoe to your collection</p>
				  {
				  this.state.openShoeForm && 
					<div>
					  <ShoeForm />
					</div>
				  } 
				</div>
		        <div className="shoe-grid">
			        <h2 className="shoe-style-title">Basketball</h2>
					<ol className="shoe-grid-items">
					        	{shoes.map((shoe, index) => 
							        (<li key={shoe.name}>
							        	{
							        		shoe.style === 'basketball' &&
							        			<div className="shoe-details">
									                <div
									                  style={{
									                    width: 170,
									                    height: 130,
									                    backgroundImage: `url(${shoe.image})`,
									                    backgroundSize: 170
									                  }}>
									                </div>
									                <div>
										                <p className="shoe-details-brand">{shoe.name}</p>
										                <p>{shoe.brand}</p>
										                <p>Size:<br /> 
										                  <span className="shoe-details-size">{shoe.size}</span>
										                </p>
										                <p>UPCid: {shoe.upcid}</p>
										            </div>
										            <div className="shoe-add-btn-small">
											            <button
											              onClick={this.edit}>Edit
											            </button>
											            <button
											              onClick={() => this.props.onRemoveShoe(shoe)}>Remove
											            </button>
											        </div> 
										        </div>
										}   	
							        </li>   
						))}
					</ol>
				</div>
				<div className="shoe-grid">
			        <h2 className="shoe-style-title">Running</h2>
					<ol className="shoe-grid-items">
					        	{shoes.map((shoe, index) => 
							        (<li key={shoe.name}>
							        	{
							        		shoe.style === 'running' &&
							        			<div className="shoe-details">
									                <div
									                  style={{
									                    width: 170,
									                    height: 130,
									                    backgroundImage: `url(${shoe.image})`,
									                    backgroundSize: 170
									                  }}>
									                </div>
									                <div>
										                <span className="shoe-details-brand">{shoe.name}</span><br />
										                <span>{shoe.brand}</span><br />
										                <p>Size:<br /> 
										                  <span className="shoe-details-size">{shoe.size}</span>
										                </p>
										                <p>UPCid: {shoe.upcid}</p>
										            </div>
										            <div className="shoe-add-btn-small">
											            <button
											              onClick={this.edit}>Edit
											            </button>
											            <button
											              onClick={() => this.props.onRemoveShoe(shoe)}>Remove
											            </button>
											        </div> 
										        </div>
										}   	
							        </li>   
						))}
					</ol>
				</div>
				<div className="shoe-grid">
			        <h2 className="shoe-style-title">Tennis</h2>
					<ol className="shoe-grid-items">
					        	{shoes.map((shoe, index) => 
							        (<li key={shoe.name}>
							        	{
							        		shoe.style === 'tennis' &&
							        			<div className="shoe-details">
									                <div
									                  style={{
									                    width: 170,
									                    height: 130,
									                    backgroundImage: `url(${shoe.image})`,
									                    backgroundSize: 170
									                  }}>
									                </div>
									                <div>
										                <span className="shoe-details-brand">{shoe.name}</span><br />
										                <span>{shoe.brand}</span><br />
										                <p>Size:<br /> 
										                  <span className="shoe-details-size">{shoe.size}</span>
										                </p>
										                <p>UPCid: {shoe.upcid}</p>
										            </div>
										            <div className="shoe-add-btn-small">
											            <button
											              onClick={this.edit}>Edit
											            </button>
											            <button
											              onClick={() => this.props.onRemoveShoe(shoe)}>Remove
											            </button>
											        </div> 
										        </div>
										}   	
							        </li>   
						))}
					</ol>
				</div>
				<div className="shoe-grid">
			        <h2 className="shoe-style-title">Cross trainers</h2>
					<ol className="shoe-grid-items">
					        	{shoes.map((shoe, index) => 
							        (<li key={shoe.name}>
							        	{
							        		shoe.style === 'crosstrainers' &&
							        			<div className="shoe-details">
									                <div
									                  style={{
									                    width: 170,
									                    height: 130,
									                    backgroundImage: `url(${shoe.image})`,
									                    backgroundSize: 170
									                  }}>
									                </div>
									                <div>
										                <span className="shoe-details-brand">{shoe.name}</span><br />
										                <span>{shoe.brand}</span><br />
										                <p>Size:<br /> 
										                  <span className="shoe-details-size">{shoe.size}</span>
										                </p>
										                <p>UPCid: {shoe.upcid}</p>
										            </div>
										            <div className="shoe-add-btn-small">
											            <button
											              onClick={this.edit}>Edit
											            </button>
											            <button
											              onClick={() => this.props.onRemoveShoe(shoe)}>Remove
											            </button>
											        </div> 
										        </div>
										}   	
							        </li>   
						))}
					</ol>	
				</div>
				<div className="shoe-grid">
			        <h2 className="shoe-style-title">Walking</h2>
					<ol className="shoe-grid-items">
					        	{shoes.map((shoe, index) => 
							        (<li key={shoe.name}>
							        	{
							        		shoe.style === 'walking' &&
							        			<div className="shoe-details">
									                <div
									                  style={{
									                    width: 170,
									                    height: 130,
									                    backgroundImage: `url(${shoe.image})`,
									                    backgroundSize: 170
									                  }}>
									                </div>
									                <div>
										                <span className="shoe-details-brand">{shoe.name}</span><br />
										                <span>{shoe.brand}</span><br />
										                <p>Size:<br /> 
										                  <span className="shoe-details-size">{shoe.size}</span>
										                </p>
										                <p>UPCid: {shoe.upcid}</p>
										            </div>
										            <div className="shoe-add-btn-small">
											            <button
											              onClick={this.edit}>Edit
											            </button>
											            <button
											              onClick={() => this.props.onRemoveShoe(shoe)}>Remove
											            </button>
											        </div> 
										        </div>
										}   	
							        </li>   
						))}
					</ol>	
				</div>
			</div>
	  	)
  	}
}

export default ShoeGrid;