import {increment,decrement} from '../constants/actions/counter';


export function addCounter(){
   
    return {type:increment};
}

export function removeCounter(){
    
    return {type:decrement};
}