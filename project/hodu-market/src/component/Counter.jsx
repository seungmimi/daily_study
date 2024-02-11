import React, { useEffect, useState } from 'react'

const Counter = (props) => {
  const [count, setCount] = useState(1);
  const handelSetCount = (e) => {
    if(count >= 1){
      setCount(parseInt(e.target.value));
    }else{
      setCount(1);
    }
  }
  const countUp = () => {
    setCount(count+1);
  }
  const countDown = () => {
    if(count > 1){
      setCount(count-1);
    }else{
      setCount(1);
    }
  }
  useEffect(() => {
    props.getCounterValue(count);
  },[count]);
  
  return (
    <div className='counter-box'>
      <button className='counter-btn' onClick={countDown}>-</button>
      <input type='number' value={count} onChange={(e)=>{handelSetCount(e)}}></input>
      <button className='counter-btn' onClick={countUp}>+</button>
    </div>
  )
}

export default Counter
