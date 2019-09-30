import React from "react";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import {Article,useStyles} from './ListArticles';

const Home = ()=>{
    const classes = useStyles();
    return(
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <h1>Home page Test</h1>
            </Paper>
        </Container>
    )
        
    
}

export default Home;