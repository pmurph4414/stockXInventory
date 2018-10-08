import React from 'react';
import serializeForm from 'form-serialize';

class ShoeForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, {hash:true})

    if(this.props.onCreateShoe) {
      this.props.onCreateShoe(values)
    }
  }

  render() {
    return (
      <div className="shoe-form">
        <h2>Tell us about your shoe</h2>
        <form
		  onSubmit={this.handleSubmit}>
          <div>
            <label>Brand</label>
            <input 
              type="text"
              name="brand">
            </input>
          </div>
          <div>
            <label>Style</label>
            <input
              type="text"
              name="style">
            </input>
          </div>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name">
            </input>
          </div>
          <div>
            <label>Size</label>
            <input
              type="text"
              name="size">
            </input>
          </div>
          <div>
            <label>UPCid</label>
            <input
              type="text"
              name="upcid">
            </input>
          </div>
          <button>Add Shoe</button>
		  <button>Reset form</button>	
        </form>
      </div>
    )
  }
}

export default ShoeForm;