import React, { Component } from "react";
import { v4 } from "uuid";

class IngredientInput extends Component {
  render() {
    return (
      <React.Fragment>
        Ingredient:
          <input
            name={"ingredientInput"}
            onChange={this.handleInputChange}
            type="text">
          </input>
        Amount:
          <input
            name={"ingredientAmount"}
            onChange={this.handleInputChange}
            type="text">
          </input>
        <br></br>
      </React.Fragment>
    )
  }
}

export default IngredientInput
