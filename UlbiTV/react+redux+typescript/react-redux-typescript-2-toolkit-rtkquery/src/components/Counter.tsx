import React from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { counterSlice } from "../store/reducers/CounterSlice"

const Counter = () => {
  const { count } = useAppSelector((state) => state.counter)
  const { increment, decrement, resetCounter } = counterSlice.actions
  const dispatch = useAppDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <div className="btns">
        <button className="btn" onClick={() => dispatch(increment(10))}>INCREMENT</button>
        <button className="btn" onClick={() => dispatch(resetCounter())}>RESET</button>
        <button className="btn" onClick={() => dispatch(decrement(10))}>DECREMENT</button>
      </div>
    </div>
  );
}

export default Counter;
