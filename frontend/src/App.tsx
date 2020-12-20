import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import SignInPage from "./Auth/Signinpage";
import SignUpPage from "./Auth/Signupage";
import Homepage from "./Components/Homepage/Homepage";
import Product from "./Components/Products/product";
import ProductTools from "./Components/Products/tools";
import ProductMaterials from "./Components/Products/materials";
import Services from "./Components/services/Services";
import AddTip from "./Components/Tips/addtip.js";
import Navbar from "./Components/Navbar/Navbar";
import ProductsCard from "./Components/Products/productcard";
import TheCart from "./Components/Products/thecart";
import CofirmBuy from "./Components/Products/confirmbuying";
import AllTips from "./Components/Tips/TipsPage";
import Tip from "./Components/Tips/Tip";
import UserProfileTest from "./Components/userprofile/userprofiletest";

import AdminSignIn from "./Components/Admin/Signinpage";
import AdminProfile from "./Components/Admin/adminprofile";
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ReactNotification from 'react-notifications-component'


class App extends React.Component<{}, any> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = { x: "" };
  }
  render() {
    return (
      <Router>
        <ReactNotification />
        <Navbar />
        <Link to={{ pathname: `/cart` }}>
          <IconButton color="primary" component="span">
            <ShoppingCartIcon fontSize="large" />
          </IconButton>
        </Link>
        <Switch>
          <Route exact path="/" render={() => <Homepage />} />
          <Route exact path="/homepage" render={() => <Homepage />} />
          <Route exact path="/" render={() => <Homepage />} />
          <Route path="/product" exact component={Product} />
          <Route path="/product/tools" exact component={ProductTools} />
          <Route path="/product/materials" exact component={ProductMaterials} />
          <Route
            path="/product/:producttype/:name"
            exact
            component={ProductsCard}
          />
          <Route path="/tips/tip/:id" exact component={Tip} />
          <Route path="/tip/add" exact component={AddTip} />
          <Route path="/tips" exact component={AllTips} />
          <Route path="/services" exact component={Services} />
          <Route exact path="/signup" render={() => <SignUpPage />} />
          <Route exact path="/signin" render={() => <SignInPage />} />
          <Route exact path="/cart" render={() => <TheCart />} />
          <Route path="/cart/confirm" exact component={CofirmBuy} />

          <Route path="/profiletest" exact component={UserProfileTest} />

          <Route path="/adminSignin" exact component={AdminSignIn} />
        </Switch>
      </Router>
    );
  }
}
export default App;
