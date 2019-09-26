import React from "react";
import { useSelector,useDispatch } from "react-redux";
import '../css/index.css';


export const Counter=({fnAdd,fnRemove,index,stateName})=>{
 
      const quantity = useSelector(state => state[stateName][index].quantity);
      console.log("Counter quantity: "+quantity+" for index: "+index);
      
      function handleAdd(){
        fnAdd();
      }

      function handleRemove(){
        fnRemove();
      }
   
    
      return (
                <div key={index} className="counter">
                  <h4>Quantity</h4>
                  <div>
                    <button onClick={handleRemove}>-</button>
                    <span className="count">{quantity}</span>
                    <button onClick={handleAdd}>+</button>
                  </div>
                </div>
              );
        
}

//export const Counter = connect(null,mapDispatchToProps)(ConnectedCounter);
