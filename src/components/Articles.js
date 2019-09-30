
import React from "react";
import ListArticles from './ListArticles';
import FormAddArticle from './FormAddArticle';

const Articles = () =>{

  return(
          <div>
                <FormAddArticle />
                <ListArticles title="Lista Articoli"/>
          </div>
   
  )

}

export default Articles;