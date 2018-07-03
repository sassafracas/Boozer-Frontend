import React, {Component} from "react";
import Adapter from "../api/Adapter"
class CocktailDetail extends Component {

  componentDidMount() {
    Adapter.getCocktailDetails(this.props.selectedCocktail.id).then(r => r.json()).then(data => {this.mapIngredients(data)})
  }

  componentDidUpdate() {
    Adapter.getCocktailDetails(this.props.selectedCocktail.id).then(r => r.json()).then(data => {this.mapIngredients(data)})
  }

  mapIngredients = (cocktailObj) => {
    cocktailObj.proportions.map(ingredient => {return this.makeIngredientLI(ingredient)})
  }

  makeIngredientLI = (ingredient) => {
    return (
      <ul>
        <li>ingredient.amount ingredient.ingredient_name</li>
      </ul>
    )
  }

  render () {
    return (
      <div style={{float:"left", height:"100%", width:"37.5%"}}>
        <h2>{this.props.selectedCocktail.name}</h2>
        <p>{this.props.selectedCocktail.description}</p>
        <p>{this.props.selectedCocktail.instructions}</p>

      </div>
    )
  }
}

export default CocktailDetail;
