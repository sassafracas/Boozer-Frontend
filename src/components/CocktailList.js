import React, { Component } from 'react';
import { List } from 'semantic-ui-react'

class CocktailList extends Component {

  makeEachCocktail = () => {
    return this.props.cocktails.map(
      cocktail => {
        return (
          <List.Item key={cocktail.id} onClick={(event) => {this.props.handleLIClick(event, cocktail.id)}}>{cocktail.name}</List.Item>
          )
        })
  }

  render() {
    return (
        this.makeEachCocktail()
    )
  }
}

export default CocktailList;
