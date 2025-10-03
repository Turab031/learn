import React, { useMemo, useState } from 'react'

const Um = () => {
    const [number,setNumber] = useState(0)
    const [counter,setCounter] = useState(0)

    function cube(num){
        console.log("calculation done!")
        return Math.pow(num,3)
    }

    const result = useMemo(()=>{return cube(number)},[number])

 

  return (
    <div>
        <input type="number" value={number} onChange={(e)=>{setNumber(Number((e.target.value)))}}/>
        <h1>cube of the number:{result}</h1>
        <button onClick={()=>{setCounter(counter+1)}}>counter++</button>
        <h1>counter:{counter}</h1>
    </div>
  )
}

export default Um