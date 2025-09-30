// import React, { useState } from "react";

// const Us = () => {
//   // const [color, setColor] = useState("Red");
//   // const change = () => {
//   //   setColor("Blue");
//   // };

//   // multiple
//   const [car, setCar] = useState({
//     brand: "ferrari",
//     model: "rome",
//     year: "2023",
//     color: "red",
//   });
//   const changeColor = () => {
//     setCar((car) => {
//       return { ...car, color: "blue" };
//     });
//   };
//   const changeModel = () => {
//     setCar((prev) => {
//       return { ...prev, model: "greek" };
//     });
//   };
//   const changeYear = () => {
//     setCar((prev) => {
//       return { ...prev, year: "2025" };
//     });
//   };
//   const changeBrand = () => {
//     setCar((prev) => {
//       return { ...prev, brand: "bmw" };
//     });
//   };

//   return (
//     <>
//       {/* <h1>my fvrt color is {color}</h1>
//       <button onClick={change}>blue</button> */}

//       <h1>my {car.brand}</h1>
//       <p>
//         {car.color} {car.model} from {car.year}
//       </p>
//       <button onClick={changeColor}>blue</button>
//       <br />
//       <button onClick={changeModel}>greek</button>
//       <br />
//       <button onClick={changeYear}>2025</button>
//       <br />
//       <button onClick={changeBrand}>bmw</button>
//     </>
//   );
// };

// export default Us;


import React, { useState } from 'react'

const Us = () => {
  const [count,setCount] = useState(0)
  const incCount=()=>{
    setCount(prev =>prev+1)
    setCount(prev =>prev+1)
    setCount(prev =>prev+1)
    setCount(prev =>prev+1)

  }
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={incCount}>
        increase
      </button>
    </div>
  )
}

export default Us