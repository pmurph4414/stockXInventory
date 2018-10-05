import React from 'react';
import {PropTypes} from 'prop-types';

class Shoe extends React.Component {
  static propTypes = {
    shoe: PropTypes.object.isRequired
  }

  render() {
  	const shoe = this.props.shoe;

  	return (
  		<div>
        <div className="shoe-details">
  	       <li>
              <div>
                <div
                  style={{
                    width: 170,
                    height: 130,
                    backgroundImage: `url(${shoe.image})`,
                    backgroundSize: 170
                  }}>
                </div>
                <div className="shoe-details-brand">{shoe.name}</div>
                <div>{shoe.brand}</div>
                <div>Size:<br /> 
                  <span className="shoe-details-size">{shoe.size}</span>
                </div>
                <div>UPCid: {shoe.upcid}</div>
            </div>
          </li>
          <div className="shoe-add-btn-small">
            <button
              onClick={this.edit}>Edit
            </button>
            <button
              onClick={() => this.props.onRemoveShoe(shoe)}>Remove
            </button>
          </div> 
        </div>
      </div>   
  	)
  }
}

export default Shoe;