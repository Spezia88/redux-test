import React from "react";
import Articles from './Articles';
import Cart from './Cart.js';
import Home from './Home';
import {Provider} from 'react-redux';
import store from '../js/store';
import MenuAppBar from './MenuAppBar.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App= () => {
  return(<Provider store={store}>
            <Router>
             <MenuAppBar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/articles">
                        <Articles />
                    </Route>
                    <Route exact path="/cart">
                        <Cart />
                    </Route>
                    
                </Switch>
            </Router>
            
            
          </Provider>); 
};

export default App;