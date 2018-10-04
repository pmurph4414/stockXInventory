import React from 'react';
import {PropTypes} from 'prop-types';

class Shoe extends React.Component {
  static propTypes = {
        shoe: PropTypes.object.isRequired,
        onRemoveShoe: PropTypes.func.isRequired
  }

  render() {
  	const {shoe, onRemoveShoe} = this.props;

  	return (
  		<div>
        <div className="shoe-details">
  	       <li>
              <div>
                <div
                  style={{
                    width: 280,
                    height: 220,
                    backgroundImage: `url(${shoe.image})`,
                    backgroundSize: 280
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