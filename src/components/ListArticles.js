import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import '../css/index.css';
import { decreaseCounterArticle, increaseCounterArticle, removeArticleFromList } from '../js/actions/article';
import { addArticle,removeArticle,increaseQuantityCart,decreaseQuantityCart } from '../js/actions/cart';
import { Counter } from './Counter';
import Grid from '@material-ui/core/Grid';

export const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    gridList: {
        width: '100%',
        height:'100%'
      },
      button: {
        margin: theme.spacing(1),
      },
  }));

export const Article=({id,name})=>{
    return(
            <div>

                <h4>Nome Articolo</h4>
                <p>{name}</p>
            </div>
    )
}
const ListArticles = ({title}) =>{

    const articleList=useSelector(state => state['articles']);
    const classes = useStyles();
    const dispatch=useDispatch();

    function handleAddToCart(e,index){
        e.preventDefault();
        dispatch(addArticle({...articleList[index]}));
    }

    function handleRemove(e,index){
            e.preventDefault();
            dispatch(removeArticleFromList(index));
    }

    function handleIncreaseCounter(index){
            
            dispatch(increaseCounterArticle(name,index));
    }
    function handleDecreaseCounter(index){
       
        dispatch(decreaseCounterArticle(index));
    }
   
    return(
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <h1>{title}</h1>
                
                    {articleList.map((article,index)=>{
                                
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
                                            <Grid item xs={1}>
                                                <span></span>
                                                <span></span>
                                                <IconButton variant="contained" size="medium" color="primary" onClick={e=>handleAddToCart(e,index)} color="primary" className={classes.button} aria-label="add to shopping cart">
                                                    <AddShoppingCartIcon />
                                                </IconButton>
                                            
                                            </Grid>
                                            <Grid item xs={1}>
                                                <span></span>
                                                <span></span>
                                                <IconButton variant="contained" size="medium" color="secondary" onClick={e=>handleRemove(e,index)} className={classes.buttonAddToCart} aria-label="delete">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Grid>
                                    
                                    </Grid>
                                       
                                )
                            

                            }
                        
                    )}
               
            </Paper>
        </Container >
    )
}

export default ListArticles;