import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Home from '@material-ui/icons/Home';
import ShopRounded from '@material-ui/icons/ShopRounded';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(2),
  },
  padding: {
    padding: theme.spacing(0, 2),
  },
}));

 const MenuAppBar=()=> {
  const classes = useStyles();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const cartNum = useSelector(state => state.cart.length);
  console.log(cartNum);
  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
           Redux-Hooks test
          </Typography>

          {auth && (
            <div>
              <Link to="/">
                <IconButton
                  aria-label="home page"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
               
                  color="inherit"
                >
                  <Home color="action"/>
                </IconButton>
              </Link>
              <Link to="/articles">
                <IconButton
                  aria-label="articles"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  
                  color="inherit"
                >
                  <ShopRounded />
                </IconButton>
              </Link>
              <Link to="/cart">
                <IconButton 
                  aria-label="4 pending messages" 
                  className={classes.margin}>
                  <Badge 
                    badgeContent={cartNum} 
                    color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </Link>  
              
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuAppBar;