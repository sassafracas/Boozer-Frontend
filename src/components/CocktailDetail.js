import React, {Component} from "react";
import Adapter from "../api/Adapter"
import { v4 } from "uuid"
import { Segment } from 'semantic-ui-react'

class CocktailDetail extends Component {

  state = {
    showDetails: false,
    cocktailProportions: [],
  }

  componentDidMount() {
    Adapter.getCocktailDetails(this.props.selectedCocktail.id).then(r => r.json()).then(data => {this.addProportionsToState(data)})
  }

  componentDidUpdate() {
    Adapter.getCocktailDetails(this.props.selectedCocktail.id).then(r => r.json()).then(data => {this.addProportionsToState(data)})
  }

  addProportionsToState = (cocktailObj) => {
    this.setState({cocktailProportions: cocktailObj.proportions})
  }


  render () {

    return (
      <Segment basic floated="left" clearing>
        <h2>{this.props.selectedCocktail.name}</h2>
        <p>{this.props.selectedCocktail.description}</p>
        <p>{this.props.selectedCocktail.instructions}</p>
        <h3>Ingredients</h3>
        <ul>
          {this.state.cocktailProportions.map(ingredient => {return <li key={v4()}>{ingredient.amount} {ingredient.ingredient_name}</li>})}
        </ul>
      </Segment>
    )
  }
}

export default CocktailDetail;
