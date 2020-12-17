import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import SignInPage from './Auth/Signinpage';
import SignUpPage from './Auth/Signupage';
import Homepage from './Components/Homepage/Homepage';
import Product from './Components/Products/product';
import ProductTools from './Components/Products/tools';
import ProductMaterials from './Components/Products/materials';
import Services from './Components/services/Services';
import AddTip from './Components/Tips/addtip.js'
import Navbar from './Components/Navbar/Navbar';
import ProductsCard from './Components/Products/productcard';
import TheCart from './Components/Products/thecart';
import CofirmBuy from './Components/Products/confirmbuying';
// import AllTips from './Components/Tips/alltipspage';

import UserProfileTest from './Components/userprofile/userprofiletest'



import AdminSignIn from './Components/Admin/Signinpage'



class App extends React.Component<{}, any>{
  constructor(props: {} | Readonly<{}>) {
    super(props)
    this.state = { x: '' }

  }
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/homepage" render={() => <Homepage />} />
          <Route path="/product" exact component={Product} />
          <Route path="/product/tools" exact component={ProductTools} />
          <Route path="/product/materials" exact component={ProductMaterials} />
          <Route path="/product/:producttype/:name" exact component={ProductsCard} />
          <Route path="/tip/add" exact component={AddTip} />
          {/* <Route path="/tips" exact component={AllTips} /> */}
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