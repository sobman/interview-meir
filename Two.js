import React from 'react';

function Two(props) {
  

    const {color}=props;
    return <ol>
    
    
   <li style={{color: color}}>{color}</li> </ol>
  
    
  }


export default Two;
