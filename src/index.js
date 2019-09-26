import React from "react";
import ReactDOM from "react-dom";
import {ListArticle} from './components/Article';
import {Provider} from 'react-redux';
import store from './js/store';

console.log(store);
console.log(store.getState());
const Index= () => {
  return(<Provider store={store}>
            <ListArticle />
          </Provider>); 
};

ReactDOM.render(<Index />, document.getElementById("index"));