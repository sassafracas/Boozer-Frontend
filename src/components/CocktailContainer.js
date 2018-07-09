import React, { Component } from 'react';
import Adapter from '../api/Adapter';
import CocktailList from "./CocktailList"
import CocktailDetail from "./CocktailDetail"
import CocktailForm from "./CocktailForm"

class CocktailContainer extends Component {

  state = {
    cocktails: [],
    selectedCocktail: {},
  }

  componentDidMount() {
    Adapter.getCocktails().then(r => r.json()).then(data => this.addCocktailsToState(data))
  }

  addCocktailsToState = (data) => {
    this.setState({
      cocktails: data
    })
  }

  handleLIClick = (event, id) => {
    let selectedCocktail = this.state.cocktails.find(cocktail => {return cocktail.id === id})
    this.setState({
      selectedCocktail
    })
  }


  render() {

    return (
      <React.Fragment>
      <div style={{float:"left", overflow:"scroll", height:"100%", position:"fixed", width: "25%"}}>
        <h4>Cocktail List</h4>
        <CocktailList cocktails={this.state.cocktails} handleLIClick={this.handleLIClick}/>
      </div>
      {this.state.selectedCocktail.hasOwnProperty("name") ? <CocktailDetail selectedCocktail={this.state.selectedCocktail}/> : <h4>Please select a cocktail from the left.</h4>}
      <CocktailForm />
      </React.Fragment>
    );
  }

}

export default CocktailContainer;
