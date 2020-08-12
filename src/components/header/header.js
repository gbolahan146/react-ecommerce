import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/utils";
import { connect } from "react-redux";
import HamburgerMenu from 'react-hamburger-menu'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false,
    }
  }

  handleMenuClick = () => {
    this.setState({
        open: !this.state.open
    });
    var x = document.getElementById("myTopnav");
    if (x.className === "navlinks") {
      x.className += " responsive";
    } else {
      x.className = "navlinks";
    }
  }


  render () {
    const { currentUser, cartQuantity } = this.props
    return (
      <div className="header__base">
        <header>
          <div className="brand logo">
            <Link to="/">Foldables</Link>
            <div className="menubar"><HamburgerMenu isOpen={this.state.open} menuClicked={this.handleMenuClick} className="menu" width={18} height={15} color='#ff0066'/></div>
          </div>
          <nav>
            <ul className="nav-list navlinks" id="myTopnav">
              <li className="nav-item display">
                <Link to="/aboutus">About Us</Link>
              </li>
              <li className="nav-item display">
                <Link to="contact">Contact</Link>
              </li>
              <li className="nav-item display">
                <Link to="products">Products</Link>
              </li>
              {currentUser ? (
                <li className="nav-item display">
                  <button onClick={() => auth.signOut()} className="signOut-btn">
                    Sign Out
                  </button>
                </li>
              ) : (
                <li className="nav-item display">
                  <Link to="signin">Sign In</Link>
                </li>
              )}
  
              <li style={{position: "relative"}} className="nav-item display">
                <Link to="cart">
                  Cart <i className="fa fa-cart-arrow-down"></i>
                </Link>
                  <div className='cart-count'>{cartQuantity}</div>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
};

const mapStateToProps = ({ user, japacart }) => ({
  currentUser: user.currentUser,
  cartQuantity: japacart.cartItems.reduce(
    (acc, arr) => acc + arr.quantity, 0
  )
});
export default connect(mapStateToProps, null)(Header);
