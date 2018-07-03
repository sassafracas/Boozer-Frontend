import React, { Component } from 'react';
import Adapter from '../api/Adapter';
import CocktailList from "./CocktailList"
import CocktailDetail from "./CocktailDetail"
import CocktailForm from "./CocktailForm"
import { List, Segment, Icon, Input, Grid, Sticky } from 'semantic-ui-react'

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
    }, ()=> {window.scrollTo(0, 0)})
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
      <Grid columns={3}>
        <Grid.Row>
        <Grid.Column width={3}>
      <Segment basic inverted floated='left' clearing>
        <Input icon={<Icon name='search' inverted circular link />} type="text" value={this.state.searchTerm} onChange={this.handleSearchChange} placeholder="Enter Cocktail Name Here"/>
        <List divided inverted relaxed animated>
          <List.Header>Cocktail List</List.Header>
          <CocktailList cocktails={this.filterCocktailList()} handleLIClick={this.handleLIClick}/>
        </List>
        </Segment>
        </Grid.Column>
        <Grid.Column width={9}>
      {this.state.selectedCocktail.hasOwnProperty("name") ? <CocktailDetail selectedCocktail={this.state.selectedCocktail}/> : <h4>Please select a cocktail from the left.</h4>}
      </Grid.Column>
      <Grid.Column width={4}>
      <CocktailForm />
      </Grid.Column>
      </Grid.Row>
      </Grid>
    );
  }

}

export default CocktailContainer;
