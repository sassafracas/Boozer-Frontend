import React, { Component } from 'react';
import { v4 } from "uuid";
import IngredientInput from "./IngredientInput"

class IngredientInputList extends Component {

  componentDidMount() {
    this.props.proportions.push(<IngredientInput key={v4()} handleInputChange={this.props.handleInputChange}/>)
  }

  mapInputs = () => {
    console.log(this.props)
    return this.props.proportions.map(proportion => {return proportion})
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
