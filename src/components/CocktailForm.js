import React, { Component } from 'react';
import { v4 } from "uuid";
import IngredientInput from "./IngredientInput"

class CocktailForm extends Component {

  state = {
    name: "",
    description: "",
    instructions: "",
    proportions: [],
    inputs: [],
    inputCounter: 1
  }

  componentDidMount = () => {
    const initalInput =
    <React.Fragment key={v4()}>
      Ingredient:
        <input
          name="ingredientInput"
          value={this.state.proportions["ingredientInput"]}
          onChange={this.handleInputChange}
          type="text">
        </input>
      Amount:
        <input
          name="ingredientAmount"
          value={this.state.proportions["ingredientAmount"]}
          onChange={this.handleInputChange}
          type="text">
        </input>
      <br></br>
    </React.Fragment>

    this.setState({
      inputs: [...this.state.inputs, initalInput]
    })
  }

  addIngredientInput = () => {
    const input =
    <React.Fragment key={v4()}>
      Ingredient:
        <input
          name={`ingredientInput${this.state.inputCounter}`}
          value={this.state.proportions[`ingredientInput${this.state.inputCounter}`]}
          onChange={this.handleInputChange}
          type="text">
        </input>
      Amount:
        <input
          name={`ingredientAmount${this.state.inputCounter}`}
          value={this.state.proportions[`ingredientAmount${this.state.inputCounter}`]}
          onChange={this.handleInputChange}
          type="text">
        </input>
      <br></br>
    </React.Fragment>

    const inputCounter = this.state.inputCounter + 1;
    this.setState({
      inputs: [...this.state.inputs, input],
      inputCounter
    })
  }

  removeIngredientInput = () => {
    this.setState({
      proportions: this.state.proportions.slice(0, -2),
      inputs: [...this.state.inputs.slice(0, -1)],
    }, ()=> console.log("remove ingredient ", this.state))
  }

  handleInputChange = (event) => {
    let proportionsInputs = this.state.proportions
    let formName = event.target.name
    let formValue = event.target.value

    proportionsInputs[formName] = formValue
    console.log('handleInputChange', this.state.proportions);

    this.setState({
      // proportionsInputs,
      proportions: proportionsInputs,
    }, ()=> console.log("handle input change ", this.state))
  }

  renderIngredients = () => {
    return (
      <label>
        Ingredients
        <br></br>
        <IngredientInput inputs={this.state.inputs} addIngredientInput={this.addIngredientInput} removeIngredientInput={this.removeIngredientInput}/>
        <br></br>
        <br></br>
      </label>
    )
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    }, ()=> console.log("form state ", this.state))

  }

  render () {
    return (
      <div style={{float:"right", width: "37.5%"}}>
        <h2>Create A New Cocktail</h2>
        <form>
          <label>
            Name
            <br></br>
            <input type="text" value={this.state.name} name="name" onChange={this.handleChange}></input>
            <br></br>
          </label>
          <label>
            Description:
            <br></br>
            <textarea value={this.state.description} name="description" onChange={this.handleChange}></textarea>
            <br></br>
          </label>
          <label>
            Instructions
            <br></br>
            <textarea value={this.state.instructions} name="instructions" onChange={this.handleChange}></textarea>
            <br></br>
          </label>
          {this.renderIngredients()}
          <input type="submit" value="Create Cocktail"></input>
        </form>
      </div>
    )
  }
}

export default CocktailForm;
