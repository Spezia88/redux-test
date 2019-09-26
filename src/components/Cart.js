import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {addArticle,removeArticle,increaseCounterArticle,decreaseCounterArticle} from '../js/actions/article';


export default Cart=()=>{

    const cartList=useSelector(state => state.cart);
    const dispatch=useDispatch();

    return(
        <div>
            <ul>
                {cartList.map((article,index)=>
                    <Article name={article.name} key={index} quantity={quantity} stateName="articles"/> 
                )}
            </ul>
           
        </div>
    )
}
