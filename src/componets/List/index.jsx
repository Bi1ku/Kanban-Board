import React from "react";
import Item from "./Items";

export default function List({
  blocktext,
  moveToNext,
  id,
  moveToPrev,
  addTask,
}) {
  return (
    <div>
      {blocktext.map((v, index) => (
        <div
          className={
            v.id === 0 || v.id === 1 || v.id === 2 || v.id === 3 ? "hidden" : ""
          }
        >
          <Item
            text={v.text}
            moveToNext={moveToNext}
            index={index}
            v={v}
            key={id + index}
            id={id}
            moveToPrev={moveToPrev}
          />
        </div>
      ))}
      <button class="end" onClick={() => addTask(id)}>
        + Add a card
      </button>
    </div>
  );
}
