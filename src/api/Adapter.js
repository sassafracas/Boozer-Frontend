const API = "http://localhost:3000/api/v1/cocktails";

class Adapter {

  static getCocktails() {
    return fetch(`${API}`)
  }

  static getCocktailDetails(id) {
    return fetch(`${API}/${id}`)
  }

}

export default Adapter;
