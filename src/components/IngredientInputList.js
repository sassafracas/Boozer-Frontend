import React, { Component } from 'react';
import { v4 } from "uuid";
import IngredientInput from "./IngredientInput"
import { Form, Input, TextArea, Button, Segment } from 'semantic-ui-react'

class IngredientInputList extends Component {

  componentDidMount() {
    this.props.proportions.push(<IngredientInput key={v4()} onChange={this.props.handleInputChange}/>)
  }

  mapInputs = () => {
    console.log(this.props)
    return this.props.proportions.map(proportion => {return <IngredientInput key={v4()} onChange={this.props.handleInputChange}/>})
  }

  render(){
    return (
      <React.Fragment>
      {this.mapInputs()}
      <br></br>
        <Form.Group widths='equal'>
          <Form.Field
            control={Button}
            onClick={this.addIngredientInput}
            content='Add Ingredient'
          />
          <Form.Field
              control={Button}
              onClick={this.removeIngredientInput}
              content='Remove Ingredient'
          />
      </Form.Group>
      </React.Fragment>
  )}
}

export default IngredientInputList;
