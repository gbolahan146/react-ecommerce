import React, { Component } from 'react';
//pages
import LandingPage from './pages/landing-page';
import ProductPage from './pages/product-page/index';
import LogIn from './pages/LogIn -page/index';
import Register from './pages/register-page/index';
import AboutUsPage from './pages/about-page/index';
import ContactPage from './pages/contact-page/index'
import CartCheckoutPage from './pages/cart-checkout-page';
import Header from './components/header/header';
import Footer from './components/footer/footer';


//routing
import { Route, Switch } from 'react-router-dom';



class App extends Component {


  render() {

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/products" component={ProductPage} />
          <Route exact path="/signin" component={LogIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/aboutus" component={AboutUsPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/cart" component={CartCheckoutPage} />

        </Switch>
        <Footer />
      </div>
    );

  }
}

export default App;
