import React, { Component } from 'react';


class IngredientInput extends Component {

  mapInputs = () => {
    //console.log(this.props)
    return this.props.inputs.map(input => {return input})
  }

  render(){
    return (
      <React.Fragment>
      {this.mapInputs()}
      <br></br>
      <input
        type="button"
        onClick={this.props.addIngredientInput}
        value="Add Ingredient">
      </input>
      <input
        type="button"
        onClick={this.props.removeIngredientInput}
        value="Remove Ingredient">
      </input>
      </React.Fragment>
  )}
}

export default IngredientInput;
