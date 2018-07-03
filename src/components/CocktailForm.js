import React, { Component } from 'react';
import { v4 } from "uuid";
import { Form, Input, TextArea, Button, Segment } from 'semantic-ui-react'

class CocktailForm extends Component {

  state = {
    name: "",
    description: "",
    instructions: "",
    ingredients: "",
  }

  handleSubmit = () => {
    console.log('%c SUBMITTED', 'color: blue', this.state);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    }, ()=> console.log("form state ", this.state))
  }



  render () {
    return (
      <Segment basic floated="right" clearing>
        <h2>Create A New Cocktail</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field
            label="Name"
            control={Input}
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
          <Form.Field
            label="Description"
            control={TextArea}
            value={this.state.description}
            name="description"
            onChange={this.handleChange}
          />
          <Form.Field
            label="Instructions"
            control={TextArea}
            value={this.state.instructions}
            name="instructions"
            onChange={this.handleChange}
          />
          <Form.Field
            label="Ingredients"
            control={TextArea}
            value={this.state.ingredients}
            name="ingredients"
            onChange={this.handleChange}
          />
          <br></br>
          <Button>Create Cocktail</Button>
        </Form>
      </Segment>
    )
  }
}

export default CocktailForm;
