import React, { Component } from 'react';
import { v4 } from "uuid";
import IngredientInput from "./IngredientInput"

class IngredientInputList extends Component {

  mapInputs = () => {
    //console.log(this.props)
    return this.props.proportions.map(proportion => {return <IngredientInput value={this.props.proportions} onChange={this.props.handleInputChange}/>})
  }

  render(){
    return (
      <React.Fragment>
      {this.mapInputs()}
      <br></br>
      </React.Fragment>
  )}
}

export default IngredientInputList;
