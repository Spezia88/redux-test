import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Index= () => {
  return(
          <MuiThemeProvider>
              <App />
           </MuiThemeProvider>   
  
  ); 
};

ReactDOM.render(<Index />, document.getElementById("index"));