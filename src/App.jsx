import React from "react";
import "./App.css";

import List from "./componets/List";

class App extends React.Component {
  state = {
    users: [
      ["user0", "bar"],
      ["user1", "bar"],
      ["user2", "bar"],
      ["user3", "bar"],
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
