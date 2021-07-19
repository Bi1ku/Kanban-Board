import React from "react";

export default function Item({
  text,
  moveToNext,
  index,
  key,
  v,
  id,
  moveToPrev,
}) {
  return (
    <div key={key} className={index === v.length - 1 ? "hidden" : "block"}>
      <button onClick={() => moveToPrev(index, id)}>Prev</button>
      <span>{text}</span>
      <button onClick={() => moveToNext(index, id)}>Next</button>
    </div>
  );
}
