import React from "react";
import "./App.css";

import List from "./componets/List";

class App extends React.Component {
  state = {
    users: [
      ["foo", "bar"],
      ["foo", "bar"],
      ["foo", "bar"],
      ["foo", "bar"],
    ],
  };

  moveToNext = (index, usersIndex) => {
    const users = this.state.users;
    users[usersIndex + 1].push(users[usersIndex][index]);
    users[usersIndex].splice(index, 1);
    this.setState({
      users,
    });
  };

  moveToPrev = (index, usersIndex) => {
    const users = this.state.users;
    users[usersIndex - 1].push(users[usersIndex][index]);
    users[usersIndex].splice(index, 1);
    this.setState({
      users,
    });
  };

  addItem = (usersIndex) => {
    const users = this.state.users;
    const add = prompt("", "");
    if (add === null) {return}
    users[usersIndex].push(add);
    this.setState({
      users,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <List
            blocktext={this.state.users} moveToNext={this.moveToNext}
            moveToPrev={this.moveToPrev} addItem={this.addItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
