import { useState, useMemo } from 'react'

function 부하(){
  let s = 0
  for (let i = 0; i < 1000000000; i++) {
    s += i
  }
  return s
}

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  let result = useMemo(()=>{
    return 부하();
  },[count2]);


  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count)
  }

  const handleCountUp2 = (e) => {
    setCount2(count2 + 1)
    console.log(count2)
  }

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>UP!</button>
      <div>{count2}</div>
      <button onClick={handleCountUp2}>UP222!</button>
    </div>
  );
}
export default App;