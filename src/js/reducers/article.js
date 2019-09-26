import {addArticle,removeArticle,increaseQuantity,decreaseQuantity} from '../constants/actions/article';



export default function articles(state=[] , action) {
    
 
   
    switch(action.type){

        case addArticle:
        
            return [...state,{id:action.id,name:action.name,quantity:action.quantity}]
        
        case removeArticle:
        
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

