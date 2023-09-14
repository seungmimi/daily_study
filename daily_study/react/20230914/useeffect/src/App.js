import {useState, useEffect} from 'react'

function Counter (){
  const [count, setCount] = useState(0)
  const handleCountUp = (e) => {
    setCount(count + 1)
  }
  useEffect(()=>{
    if(count%2){
      console.log('홀수입니다.')
    }else{
      console.log('짝수입니다.')
    }

    return()=>{
      console.log('컴포넌트가 바뀌기 직전입니다~')
    }

  }, [count])

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;