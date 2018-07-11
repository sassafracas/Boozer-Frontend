import React, { Component } from 'react';
import Adapter from '../api/Adapter';
import CocktailList from "./CocktailList"
import CocktailDetail from "./CocktailDetail"
import CocktailForm from "./CocktailForm"

class CocktailContainer extends Component {

  state = {
    cocktails: [],
    selectedCocktail: {},
    searchTerm: "",
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

  handleSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  filterCocktailList = () => {
    return this.state.cocktails.filter(cocktail => {return cocktail.name.toUpperCase().includes(this.state.searchTerm.toUpperCase())})
  }

  render() {
    this.filterCocktailList()
    return (
      <React.Fragment>
      <div style={{float:"left", overflow:"scroll", height:"100%", position:"fixed", width: "25%"}}>
        <h4>Cocktail List</h4>
        <h5>Search Cocktails:</h5>
        <input type="text" value={this.state.searchTerm} onChange={this.handleSearchChange} placeholder="Enter Cocktail Name Here"/>
        <CocktailList cocktails={this.filterCocktailList()} handleLIClick={this.handleLIClick}/>
      </div>
      {this.state.selectedCocktail.hasOwnProperty("name") ? <CocktailDetail selectedCocktail={this.state.selectedCocktail}/> : <h4>Please select a cocktail from the left.</h4>}
      <CocktailForm />
      </React.Fragment>
    );
  }

}

export default CocktailContainer;
