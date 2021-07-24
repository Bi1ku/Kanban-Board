import React, { useState, useEffect } from "react";
import "./App.css";

import List from "./componets/List";

const App = () => {
  const [users, setUsers] = useState([
    ["foo", "bar"],
    ["foo", "bar"],
    ["foo", "bar"],
    ["foo", "bar"],
  ]);

  const moveToNext = (index, usersIndex) => {
    const newUsers = users;
    newUsers[usersIndex + 1].push(newUsers[usersIndex][index]);
    newUsers[usersIndex].splice(index, 1);
    setUsers([...users]);
  };

  const moveToPrev = (index, usersIndex) => {
    const newUsers = users;
    newUsers[usersIndex - 1].push(newUsers[usersIndex][index]);
    newUsers[usersIndex].splice(index, 1);
    setUsers([...newUsers]);
  };

  const addItem = (usersIndex) => {
    const add = prompt("", "");
    const newUsers = users;
    if (add === null) {
      return;
    }
    newUsers[usersIndex].push(add);
    setUsers([...newUsers]);
  };

  return (
    <div className="App">
      <div className="container">
        <List
          users={users}
          moveToNext={moveToNext}
          moveToPrev={moveToPrev}
          addItem={addItem}
        />
      </div>
    </div>
  );
};

export default App;
