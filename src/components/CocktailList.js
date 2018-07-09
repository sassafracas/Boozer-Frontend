import React, { Component } from 'react';

class CocktailList extends Component {

  makeEachCocktail = () => {
    return this.props.cocktails.map(
      cocktail => {
        return (
          <li key={cocktail.id} onClick={(event) => {this.props.handleLIClick(event, cocktail.id)}}>{cocktail.name}</li>
          )
        })
  }

  render() {
    return (
      <ul>
        {this.makeEachCocktail()}
      </ul>

    )
  }
}

export default CocktailList;
