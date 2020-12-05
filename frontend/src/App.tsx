<<<<<<< HEAD
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import SignInPage from './Auth/Signinpage';
import SignUpPage from './Auth/Signupage';
import 'antd/dist/antd.css';

// import { connect } from 'react-redux'
// import { Dispatch } from 'redux'
// import { AppState } from './store/rootStore'
// import 'reset-css'
import { makeStyles } from "@material-ui/core/styles";
import Homepage from './Components/Homepage/Homepage';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  }
}))


const App = () => {
  const classes = useStyles();
  return (
    // <Homepage />
    <div className='App'>
      <Router>
        <Homepage />
        <Switch>
          {/* <Route exact from="/" render={props => <Home {...props} />} /> */}
          <Route exact path="/signup" render={() => <SignUpPage />} />
          <Route exact path="/signin" render={() => <SignInPage />} />
        </Switch>
      </Router>
    </div>
  );

}

export default App;
=======
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import SignInPage from './Auth/Signinpage';
import SignUpPage from './Auth/Signupage';
import Homepage from './Components/Homepage/Homepage';
import Product from './Components/Homepage/Products/product';
import ProductTools from './Components/Homepage/Products/tools';
import ProductMaterials from './Components/Homepage/Products/materials';

// import { connect } from 'react-redux'
// import { Dispatch } from 'redux'
// import { AppState } from './store/rootStore'
// import 'reset-css'
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     padding: theme.spacing(3),
//   }
// }))


const App = () => {
  // const classes = useStyles();
  return (
    // <Homepage />
    <div >
      <Router>
        <Switch>
          <Route exact path="/" render={()=> <Homepage />} />        
                   
        <Route path="/product" exact component={Product} />
        <Route path="/tools" exact component={ProductTools} />
        <Route path="/materials" exact component={ProductMaterials} />
        
          <Route exact path="/signup" render={() => <SignUpPage />} />
          <Route exact path="/signin" render={() => <SignInPage />} />
        </Switch>
      </Router>
    </div>
  );

}

export default App;
>>>>>>> cedb8a63c01e9f03ddf2596d2c9d9c457501e5ee
