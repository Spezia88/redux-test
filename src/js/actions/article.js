import {addArticle,removeArticle,increaseQuantity,decreaseQuantity} from '../constants/actions/article';


export function increaseCounterArticle(name,index){
   
    return {
                type:increaseQuantity,
                name:name,
                index:index
    };
}

export function decreaseCounterArticle(index){
    
    return {
                type:decreaseQuantity,
                index:index
    };
}

export function addArticleToList(id,name){
    console.log("addaArticleToList: "+name);
    return {
                type:addArticle,
                id:id,
                name:name,
                quantity:0
    };
}

export function removeArticleFromList(index){
    
    return {
                type:removeArticle,
                index:index
    };
}