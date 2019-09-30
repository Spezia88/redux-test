import {addtoCart,removeFromCart,increaseQuantity,decreaseQuantity} from '../constants/actions/cart';



export default function cart(state=[] , action) {
    
    console.dir(action);
 
    switch(action.type){

        case addtoCart:
       
            return [...state,{...action.payload}]
        
        case removeFromCart:
        
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        
        case increaseQuantity:
        
            return [...state.slice(0, action.index), 
                    Object.assign({}, state[action.index], {quantity: state[action.index].quantity+1}),
                    ...state.slice(action.index + 1)];

        case decreaseQuantity:
            return  [...state.slice(0, action.index), 
                Object.assign({}, state[action.index], {quantity: state[action.index].quantity -1 }),
                ...state.slice(action.index + 1)];
        default:
            
            return state;
   
    }
    
   
  };

