import React, { useState, useEffect, useRef } from 'react';

function Counter() {
    const [count, setCount] = useState(0)
    const [countTwo, setCountTwo] = useState(0)
    let countThree = useRef(0)
    let countFour = 0

    const handleCountUp = () =>{
        setCount(count + 1);
        console.log(count);
    }
    const handleCountUpTwo = () =>{
        setCountTwo(countTwo + 1);
        console.log(countTwo);
    }
    const handleCountUpThree = () =>{
        countThree.current = countThree.current + 1;
        console.log(countThree.current);
    }
    const handleCountUpFour = () =>{
        countFour += 1;
        console.log(countFour);
    }

    useEffect(() => {
        console.log('count감시되고 있습니다',count);
    },[count])

    return(
        <>
            <div>{count}</div>
            <button onClick={handleCountUp}>up!</button>

            <div>{countTwo}</div>
            <button onClick={handleCountUpTwo}>up!</button>

            <div>{countThree.current}</div>
            <button onClick={handleCountUpThree}>up!</button>

            <div>{countFour}</div>
            <button onClick={handleCountUpFour}>up!</button>
        </>
    )
}

function App2(){
    return(
        <Counter />
    )
    
}

export default App2;