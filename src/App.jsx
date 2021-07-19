import React from "react";
import "./App.css";

import List from "./componets/List";

class App extends React.Component {
  state = {
    users: [
      {
        user1: [
          {
            text: "user1",
          },
          {
            text: "bar",
          },
          {
            id: 0,
          },
        ],
      },
      {
        user2: [
          {
            text: "user2",
          },
          {
            text: "bar",
          },
          {
            id: 1,
          },
        ],
      },
      {
        user3: [
          {
            text: "user3",
          },
          {
            text: "bar",
          },
          {
            id: 2,
          },
        ],
      },
      {
        user4: [
          {
            text: "user4",
          },
          {
            text: "bar",
          },
          {
            id: 3,
          },
        ],
      },
    ],

    input: "",
    user1ID: 0,
    user2ID: 1,
    user3ID: 2,
    user4ID: 3,
  };

  moveToNext = (index, id) => {
    const users = this.state.users;
    let userName = "";
    if (id === 0) {
      userName = users[id].user1;
    }
    if (id === 1) {
      userName = users[id].user2;
    }
    if (id === 2) {
      userName = users[id].user3;
    }
    if (id === 3) {
      userName = users[id].user4;
    }
    let textTracker = userName[index].text;
    userName.splice(userName.indexOf(userName[index]), 1);
    if (id === 0) {
      userName = users[1].user2;
    }
    if (id === 1) {
      userName = users[2].user3;
    }
    if (id === 2) {
      userName = users[3].user4;
    }
    if (id === 3) {
      userName = users[0].user1;
    }
    userName.push({ text: textTracker });
    console.log(userName);
    users.push(userName);
    this.setState({
      users,
    });
  };

  moveToPrev = (index, id) => {
    const users = this.state.users;
    let userName = "";
    if (id === 0) {
      userName = users[id].user1;
    }
    if (id === 1) {
      userName = users[id].user2;
    }
    if (id === 2) {
      userName = users[id].user3;
    }
    if (id === 3) {
      userName = users[id].user4;
    }
    let textTracker = userName[index].text;
    userName.splice(userName.indexOf(userName[index]), 1);
    if (id === 0) {
      userName = users[3].user4;
    }
    if (id === 1) {
      userName = users[0].user1;
    }
    if (id === 2) {
      userName = users[1].user2;
    }
    if (id === 3) {
      userName = users[2].user3;
    }
    userName.push({ text: textTracker });
    console.log(userName);
    users.push(userName);
    this.setState({
      users,
    });
  };

  addTask = (id) => {
    const cool = prompt("", "");
    const users = this.state.users;
    let userName = "";
    if (id === 0) {
      userName = users[id].user1;
    }
    if (id === 1) {
      userName = users[id].user2;
    }
    if (id === 2) {
      userName = users[id].user3;
    }
    if (id === 3) {
      userName = users[id].user4;
    }
    userName.push({ text: cool });
    users.push(userName);
    this.setState({
      users,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div>
            <div className="user1">
              <h2 className="name">Winnie</h2>
            </div>
            <List
              blocktext={this.state.users[0].user1}
              moveToNext={this.moveToNext}
              moveToPrev={this.moveToPrev}
              id={this.state.user1ID}
              addTask={this.addTask}
            />
          </div>
          <div>
            <div className="user2">
              <h2 className="name">Bob</h2>
            </div>
            <List
              blocktext={this.state.users[1].user2}
              moveToNext={this.moveToNext}
              moveToPrev={this.moveToPrev}
              id={this.state.user2ID}
              addTask={this.addTask}
            />
          </div>
          <div>
            <div className="user3">
              <h2 className="name">Thomas</h2>
            </div>
            <List
              blocktext={this.state.users[2].user3}
              moveToNext={this.moveToNext}
              moveToPrev={this.moveToPrev}
              id={this.state.user3ID}
              addTask={this.addTask}
            />
          </div>
          <div>
            <div className="user4">
              <h2 className="name">George</h2>
            </div>
            <List
              blocktext={this.state.users[3].user4}
              moveToNext={this.moveToNext}
              moveToPrev={this.moveToPrev}
              id={this.state.user4ID}
              addTask={this.addTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
