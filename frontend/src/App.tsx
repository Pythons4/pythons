import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import SignInPage from './Auth/Signinpage';
import SignUpPage from './Auth/Signupage';
import Homepage from './Components/Homepage/Homepage';
import Product from './Components/Products/product';
import ProductTools from './Components/Products/tools';
import ProductMaterials from './Components/Products/materials';
import axios from "axios";
import AddTip from './Components/Tips/addtip.js'
import Navbar from './Components/Navbar/Navbar';


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

class App extends React.Component<{}, any>{
  constructor(props: {} | Readonly<{}>) {
    super(props)
    this.state = { x: '' }

  }
  componentDidMount() {
    axios
      .get("/api/tips/")
      .then(res => {
        console.log(res.data[0].tip_img)
        this.setState({
          x: res.data[0].tip_img
        })
      })
      .catch(err => console.log(err));
  };


  // const classes = useStyles();
  render() {
    return (
      // <Homepage />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/homepage" render={() => <Homepage />} />

          <Route path="/product" exact component={Product} />
          <Route path="/tools" exact component={ProductTools} />
          <Route path="/materials" exact component={ProductMaterials} />
          <Route path="/tips" exact component={AddTip} />

          <Route exact path="/signup" render={() => <SignUpPage />} />
          <Route exact path="/signin" render={() => <SignInPage />} />
        </Switch>
      </Router>
    );
  }
}

export default App;

