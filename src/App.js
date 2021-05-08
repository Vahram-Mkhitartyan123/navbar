import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from './bolola.png';
import Signin from "./pages/signin";
import Login from "./pages/login";
import { BrowserRouter as Router, Route} from "react-router-dom";

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
  },

  logo:{
    height:70,
    marginRight: theme.spacing(107),
  },
  button:{
    marginRight: theme.spacing(1),
  },
  button1:{
    marginLeft: theme.spacing(1),
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
      <Router>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography href ="Home" variant="h4" className={classes.title}>
                Bolola
              </Typography>
                <Toolbar>
                  <img align ="left" src={Logo} edge = "start" className={classes.logo} />
                </Toolbar>
              
              <Button href ="Signin" className = {classes.button} variant="contained" color="secondary">sign in</Button>
              <Button href ="Login" variant="contained" color="secondary">Login</Button>
              <Button href ="/" className = {classes.button1} variant="contained" color="secondary">Home</Button>
              
            </Toolbar>
          </AppBar>
        </div>
        <Route exact path = "/login" component = {Login}/>
        <Route exact path ='/Signin' component = {Signin}/>
      </Router>
  );
}
