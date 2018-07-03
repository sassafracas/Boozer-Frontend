import React, { Component } from 'react';


class CocktailForm extends Component {
  render () {
    return (
      <div style={{float:"right", width: "37.5%"}}>
        <form>
          <label>
            Name
            <br></br>
            <input type="text"></input>
            <br></br>
          </label>
          <label>
            Description:
            <br></br>
            <textarea></textarea>
            <br></br>
          </label>
          <label>
            Instructions
            <br></br>
            <textarea></textarea>
            <br></br>
          </label>
          <input type="submit" value="Create Cocktail"></input>
        </form>
      </div>
    )
  }
}

export default CocktailForm;
