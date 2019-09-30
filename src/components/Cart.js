import React from "react";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { useSelector,useDispatch } from "react-redux";
import {Article,useStyles} from './ListArticles';
import {increaseQuantityCart,decreaseQuantityCart,removeArticle} from '../js/actions/cart';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import {Counter} from './Counter';

const Cart=()=>{

    const cartList=useSelector(state => state.cart);
    const dispatch=useDispatch();
    const classes = useStyles();
    

    function handleRemove(e,index){
            e.preventDefault();
            dispatch(removeArticle(index));
    }

    function handleIncreaseCounter(index){
            
            dispatch(increaseQuantityCart(index));
    }
    function handleDecreaseCounter(index){
       
        dispatch(decreaseQuantityCart(index));
    }
   
    return(
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <h1>Cart</h1>
            
                {cartList.map((article,index)=>{
                     return (
                        <Grid key={article.id} container spacing={10}>
                                <Grid item xs={3}>
                                    <Article id= {article.id} 
                                        name={article.name} 
                                        key={article.id} 
                                    />
                                </Grid>
                                <Grid item xs={5}>
                                    <Counter fnAdd={handleIncreaseCounter} fnRemove={handleDecreaseCounter} index={index} quantity={article.quantity}/>
                                </Grid>
                               
                                <Grid item xs={2}>
                                    <span></span>
                                    <span></span>
                                    <IconButton variant="contained" size="medium" color="secondary" onClick={e=>handleRemove(e,index)} className={classes.buttonAddToCart} aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                        
                        </Grid>
                           
                    )
                })}
            
           
            </Paper>
        </Container >
    )
}

export default Cart