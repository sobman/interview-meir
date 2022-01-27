import React, { useEffect } from 'react';

import './App.css'
import cal from './COMP/cal'
import Two from './COMP/Two';
const colors = ['#000','blue','green','magenta','blue','green'];


function App() {
let count=0;

const names=['meir','sobhe'];


  return <div>
  
  <h1>hello sobhe</h1>
  <h3>how are you today sobhe</h3>

  {colors.map((colora ,index)=>{
    return(
     <Two
     key={index}
     color={colora}
     />)
    })} 
  </div>;
}

export default App;
