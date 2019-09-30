import { addtoCart,removeFromCart,increaseQuantity,decreaseQuantity } from "../constants/actions/cart"


export function addArticle(payload) {
    return { type: addtoCart, payload }
};

export function removeArticle(index) {
    return { type: removeFromCart, index }
};

export function increaseQuantityCart(index){
    return {type:increaseQuantity,index}
}

export function decreaseQuantityCart(index){
    return {type:decreaseQuantity,index}
}