import React, { Component } from "react";
import { v4 } from "uuid";

class IngredientInput extends Component {
  render() {
    return (
      <React.Fragment>
        Ingredient:
          <input
            key={v4()}
            name={"ingredientInput" + "-" + v4()}
            value={this.props.proportions["ingredientInput" + "-" + v4()]}
            onChange={this.handleInputChange}
            type="text">
          </input>
        Amount:
          <input
            key={v4()}
            name={"ingredientAmount" + "-" + v4()}
            value={this.props.proportions["ingredientAmount" + "-" + v4()]}
            onChange={this.handleInputChange}
            type="text">
          </input>
        <br></br>
      </React.Fragment>
    )
  }
}

export default IngredientInput
