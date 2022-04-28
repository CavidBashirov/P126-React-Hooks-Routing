import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { useNavigate } from "react-router-dom";

function Basket(props) {

    const [count,setCount] = useState(0);
    localStorage.setItem("count",JSON.stringify(count));
   

    const addCount = () => {
        props.takeCount(count + 1)
        setCount(count + 1);
      
    }

  

    
    return (
        <div className='container mt-5'>
            <h3>{count}</h3>
            <Button color='success' onClick={addCount}>Add to basket</Button>
        </div>
    )
}

export default Basket
