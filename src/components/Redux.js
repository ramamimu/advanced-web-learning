import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "stores/counter-slice";

export default function Redux() {
  const count = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-3xl">Belajar Redux</h1>
      <p>result increment = {count}</p>
      <button
        className="p-2 mt-2 bg-white"
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <br />
      <button
        className="p-2 mt-2 bg-white"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
    </div>
  );
}
