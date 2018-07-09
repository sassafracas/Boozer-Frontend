import React, { Component } from 'react';
import { v4 } from "uuid";

class CocktailForm extends Component {

  state = {
    name: "",
    description: "",
    instructions: "",
    proportions: [{}],
    inputs: []
  }

  addIngredientInput = () => {
    const input =
    <React.Fragment key={v4()}>
      Ingredient:<input type="text"></input> Amount:<input type="text"></input>
      <br></br>
    </React.Fragment>

    this.setState({
      inputs: [...this.state.inputs, input]
    }, ()=> console.log("form state ", this.state.inputs))
  }

  removeIngredientInput = () => {
    this.setState({
      inputs: [...this.state.inputs.slice(1)]
    }, ()=> console.log("form state ", this.state.inputs))
  }

  renderIngredients = () => {
    return (
      <label>
        Ingredients
        <br></br>
        Ingredient:<input type="text"></input> Amount:<input  type="text"></input>
        <br></br>
        {this.state.inputs.map(input => {return input})}
        <br></br>
        <input type="button" onClick={this.addIngredientInput} value="Add Ingredient"></input> <input type="button" onClick={this.removeIngredientInput} value="Remove Ingredient"></input>
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
