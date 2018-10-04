import React from 'react';
// import {PropTypes} from 'prop-types';

class Modal extends React.Component {
  render() {
    return (
      <div className="modal">
        <h1>Add shoe</h1>
        <form>
          <label>Brand</label>
          <input 
            type="text">
          </input>    
        </form>
      </div>
    )
  }
}

export default Modal;