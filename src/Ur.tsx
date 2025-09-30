// import React, { useEffect, useRef, useState } from 'react'

// const Ur = () => {
//     const [value,setValue] = useState(0)
//     // const [count,setCount] = useState(0)
//     const count = useRef(0)
//     useEffect(()=>{
//         count.current= count.current+1
//     })
    

//   return (
//     <div>

//         <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>
//         <h1>{value}</h1>
//         <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
//         <h1>render count:{count.current}</h1>
//     </div>
//   )
// }

// export default Ur

import React, { useRef } from 'react'

const Ur = () => {
    const ip = useRef<HTMLInputElement>(null)
    
  return (
    <div>
        <input type="text"  ref={ip} />
        <button>click here</button>
    </div>
  )
}

export default Ur