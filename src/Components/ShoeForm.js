import React from 'react';
// import {PropTypes} from 'prop-types';

class ShoeForm extends React.Component {
  // static propTypes = {
  //     shoes: PropTypes.array.isRequired
  // }

  render() {

    return (
      <div className="shoe-form">
        <h2>Tell us about your shoe</h2>
        <form>
          <div>
            <label>Brand</label>
            <input 
              type="text">
            </input>
          </div>
          <div>
            <label>style</label>
            <input
              type="text">
            </input>
          </div>    
        </form>
      </div>
    )
  }
}

export default ShoeForm;