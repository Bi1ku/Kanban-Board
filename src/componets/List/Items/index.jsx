import React from "react";

export default function Item({
  text,
  moveToNext,
  index,
  usersIndex,
  moveToPrev,
}) {
  return (
    <div className={"block"}>
      <button
        className={usersIndex === 0 && "hidden"}
        onClick={() => moveToPrev(index, usersIndex)}
      >
        Prev
      </button>
      <span>{text}</span>
      <button
        className={usersIndex === 3 && "hidden"}
        onClick={() => moveToNext(index, usersIndex)}
      >
        Next
      </button>
    </div>
  );
}
