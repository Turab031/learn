// import React, { useState } from "react";
// import Message from "./Message";
// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";

// import Button from "./components/Button";
// const App = () => {
//   // let items = ["new york", "chicago", "washington", "tokyo", "paris"];
//   // const handleSelectedItem=(item:string)=>{
//   //   console.log(item)
//    const [alertvis,setAlertvis]=useState(false)
//   // }

//   return (
   
//     <div>
//       {/* <Message/> */}
//       {/* <ListGroup items={items} heading="cities" onSelectedItem={handleSelectedItem}/> */}
//      {alertvis && <Alert>my Alert</Alert>}
//       <Button color="primary" onClick={()=>setAlertvis(true)}>My Button</Button>
//     </div>
//   );
// };
// export default App;


import React from 'react'
import { useState } from 'react'
import Us from './Us'
import Ue from './Ue'
import Ur from './Ur'
import Um from './Um'

const App = () => {
  


  return (
    <div>
     {/* <Us/> */}
     {/* <Ue/> */}
     {/* <Ur/> */}
     <Um/>
    </div>
  )
}

export default App