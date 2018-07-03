import React, { Component } from "react";
import { v4 } from "uuid";

class IngredientInput extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        Ingredient:
          <input

            name={"ingredientInput"}
            onChange={this.props.handleInputChange}
            type="text">
          </input>
        Amount:
          <input

            name={"ingredientAmount"}
            onChange={this.props.handleInputChange}
            type="text">
          </input>
        <br></br>
      </React.Fragment>
    )
  }
}

export default IngredientInput
