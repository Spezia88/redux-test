import { addtoCart,removeFromCart } from "../constants/actions/cart"


export function addArticle(payload) {
    return { type: addtoCart, payload }
};

export function removeArticle(payload) {
    return { type: removeFromCart, payload }
};