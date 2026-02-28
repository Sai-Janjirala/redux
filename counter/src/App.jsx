import React, { useState } from 'react'
import { decrement, incbyamount, increment } from './redux/features/counterSlice'
import { useDispatch,useSelector } from 'react-redux'

const App = () => {

  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)
  const [num, setNum] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        dispatch(increment())
      }}>increment</button>
      <button onClick={()=>{
        dispatch(decrement())
      }}>decrement</button>
      <input type="number" value={num} onChange={(e)=>{
        setNum(e.target.value)
      }} />
      <button
      onClick={()=>{
        dispatch(incbyamount(Number(num)))
      }}
      >Increase by amount</button>
    </div>
  )
}

export default App
