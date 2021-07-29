import React, { useState } from 'react';
import './App.css';
import textList from './constants/text';

import List from './componets/List';

const App = () => {
  const [text, setUsers] = useState(textList);

  const moveToNext = (index, usersIndex) => {
    textList[usersIndex + 1].push(textList[usersIndex][index]);
    textList[usersIndex].splice(index, 1);
    setUsers([...text]);
  };

  const moveToPrev = (index, usersIndex) => {
    textList[usersIndex - 1].push(textList[usersIndex][index]);
    textList[usersIndex].splice(index, 1);
    setUsers([...text]);
  };

  const addItem = (usersIndex) => {
    const add = prompt('', '');
    if (add === null) {
      return;
    }
    textList[usersIndex].push(add);
    setUsers([...text]);
  };

  return (
    <div className='App'>
      <div className='container'>
        <List
          textList={textList}
          moveToNext={moveToNext}
          moveToPrev={moveToPrev}
          addItem={addItem}
        />
      </div>
    </div>
  );
};

export default App;
