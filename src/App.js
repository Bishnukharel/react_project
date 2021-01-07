import React, { Component } from "react";
import axios from "axios";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import Searchbox from "./components/search-box/searchbox";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: " ",
    };

    this.handlechange = this.handlechange.bind(this);
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState({ monsters: response.data });
      })
      .catch();
  }

  handlechange(e) {
    this.setState({ searchField: e.target.value });
    e.preventDefault();
  }
  render() {
    const { monsters, searchField } = this.state;

    const filterMosters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1 className="heading">Monster Search </h1>
        <Searchbox
          placeholder="search monsters"
          handleChange={this.handlechange}
        />
        <CardList monsters={filterMosters}></CardList>
      </div>
    );
  }
}
export default App;
