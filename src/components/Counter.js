import React from "react";
import '../css/index.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


export const Counter=({fnAdd,fnRemove,index,quantity})=>{

      const classes=useStyles();

      function handleAdd(){
      
          fnAdd(index);
        
      }

      function handleRemove(){
       
          fnRemove(index);
       
      }
   
    
      return (
                <div key={index} className="counter">
                    <h4>Quantity</h4>
                    <div>
                      <Fab color="secondary" aria-label="remove" size="small" className={classes.fab} onClick={handleRemove}>
                        <RemoveIcon />
                      </Fab>
                      
                      <output >{quantity}</output>
                      <Fab color="primary" aria-label="add" size="small" className={classes.fab} onClick={handleAdd}>
                          <AddIcon />
                      </Fab>
                      </div>
                </div>
              );
        
}

//export const Counter = connect(null,mapDispatchToProps)(ConnectedCounter);
