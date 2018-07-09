import React, {Component} from "react";
import Adapter from "../api/Adapter"

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
      <div style={{float:"right", height:"100%", width:"37.5%"}}>
        <h2>{this.props.selectedCocktail.name}</h2>
        <p>{this.props.selectedCocktail.description}</p>
        <p>{this.props.selectedCocktail.instructions}</p>
        <h3>Ingredients</h3>
        <ul>
          {this.state.cocktailProportions.map(ingredient => {return <li>{ingredient.amount} {ingredient.ingredient_name}</li>})}
        </ul>
      </div>
    )
  }
}

export default CocktailDetail;
