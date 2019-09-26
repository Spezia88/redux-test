import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {addArticleToList,removeArticleFromList,increaseCounterArticle,decreaseCounterArticle} from '../js/actions/article';
import {addArticle} from '../js/actions/cart';
import useForm from '../js/hooks/useForm';
import {Counter} from './Counter';
import '../css/index.css';

export const Article=({id,name,quantity,index,stateName})=>{
    console.log("id: "+id);   
    console.log("name: "+name);
    console.log("quantity: "+quantity);
    console.log("stateName: "+stateName);
    const article = useSelector(state => state[stateName][index]);
    const dispatch=useDispatch();

    function handleAddToCart(e){
        e.preventDefault();
        console.log(article);
        dispatch(addArticle({...article}));
    }
    function handleRemove(e){
            e.preventDefault();
            dispatch(removeArticleFromList(index));
    }
    function handleIncreaseCounterArticle(){
        
        dispatch(increaseCounterArticle(name,index));
    }
    function handleDecreaseCounterArticle(){
       
        dispatch(decreaseCounterArticle(index));
    }
  
    return( 
            <div key={id}>
               
                    <p>{name}</p>
                    <Counter fnAdd={handleIncreaseCounterArticle} fnRemove={handleDecreaseCounterArticle} index={index} stateName={stateName} />
                    <button onClick={e=>handleAddToCart(e)}>Add To Cart</button>
                    <button onClick={e=>handleRemove(e)}>Remove</button>
            </div>
            )  
}

export const FormInsertArticle=()=>{

  
    const dispatch=useDispatch();
    const {handleChange,handleSubmit,handleClearValues,values}=useForm({name:'',id:''},insertArticleInList);
    
    function insertArticleInList() {
        
        dispatch(addArticleToList(values.id,values.name));
        handleClearValues();
        
    }
    
    
    return(
       
            <div>
                <h1>Aggiungi Articoli</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="articleName">Nome</label>
                    <input name="name" type="text" id="articleName" value={values.name} onChange={(e)=>handleChange(e)}></input>
                    <label htmlFor="articleId">Id</label>
                    <input name="id" type="text" id="articleId" value={values.id} onChange={(e)=>handleChange(e)}></input>
                    <button type="submit" >Aggiungi</button>
                </form>
            </div>
           
    )
}
export const ListArticle=()=>{

    const articleList=useSelector(state => state.articles);
    //const dispatch=useDispatch();
    
    console.log(articleList);
    return(
        <div>
            <div>
                 <FormInsertArticle />
            </div>
            <h1>Lista Articoli</h1>
            <ul>
                {articleList.map((article,index)=>{
                            
                            return <Article id= {article.id} name={article.name} key={article.id} quantity={article.quantity} index={index} stateName="articles"/>
                           
                           

                        }
                     
                )}
            </ul>
           
        </div>
    )
}

