import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import React from "react";
import { useDispatch } from "react-redux";
import '../css/index.css';
import { addArticleToList } from '../js/actions/article';
import useForm from '../js/hooks/useForm';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
        height: '10%'
      }
  }));


const FormInsertArticle=()=>{
    const classes=useStyles();
    const dispatch=useDispatch();
    const {handleChange,handleSubmit,handleClearValues,values}=useForm({name:'',id:''},insertArticleInList);
    
    function insertArticleInList() {
        
        dispatch(addArticleToList(values.id,values.name));
        handleClearValues();
        
    }
    
    
    return(
       
                <Container fixed>
                    <Paper className={classes.paper}>
                        <h1>Aggiungi Articoli</h1>
                        <form onSubmit={handleSubmit}>
        
                            <Grid container spacing={4}>
                                <Grid item xs>
                                
                                        <label htmlFor="articleName">Nome</label>
                                        <input name="name" type="text" id="articleName" value={values.name} onChange={(e)=>handleChange(e)}></input>
                                
                                </Grid>
                                <Grid item xs>
                                
                                        <label htmlFor="articleId">Id</label>
                                        <input name="id" type="text" id="articleId" value={values.id} onChange={(e)=>handleChange(e)}></input>
                                    
                                </Grid>
                                <Grid item xs>
                                    
                                    <Button variant="contained" size="large" color="primary" type="submit">Aggiungi</Button>
                                
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Container >
           
    )
}

export default FormInsertArticle;