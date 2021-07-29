import React from 'react';
import Item from './Items';
import usersNames from '../../constants/users';

export default function List({ textList, moveToNext, moveToPrev, addItem }) {
  return (
    <div className='container'>
      {textList.map((v, i, arr) => (
        <div>
          <h3
            className={
              (i === 0 && 'user1 users') ||
              (i === 1 && 'user2 users') ||
              (i === 2 && 'user3 users') ||
              (i === 3 && 'user4 users')
            }
          >
            {usersNames[i]}
          </h3>
          {arr[i].map((v, i2, arr) => (
            <Item
              text={arr[i2]}
              index={i2}
              usersIndex={i}
              moveToNext={moveToNext}
              moveToPrev={moveToPrev}
            />
          ))}
          <button className='end' onClick={() => addItem(i)}>
            + Add a card
          </button>
        </div>
      ))}
    </div>
  );
}
