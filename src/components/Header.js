import React from 'react';
import { Link } from 'react-router-dom';

import flat from '../../assets/img/flat-cake.jpg';

export default function Header() {
  return (
    <div className="header__base">
      <header>
        <div className="brand">
        <Link to="/">Foldables</Link>
        </div>
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
            <Link to="/aboutus">About Us</Link>
            </li>
            <li className="nav-item">
            <Link to="contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="products">Products</Link>
            </li>
            <li className="nav-item">
            <Link to="signin">Sign In</Link>
            </li>
            <li className="nav-item">
            <Link to="cart">
                Cart <i class="fa fa-cart-arrow-down"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="header-intro">
        <div className="text-cta">
          <h2 className="text-intro">
            Find out the sweet story behind our Mastery.
          </h2>
          <p className="more-intro">
            Everything we offer is made right here, from cookies to pasteries to
            cakes. Name them, we've got you covered.
          </p>
        </div>
        <div className="image-cta">
          <img
            src={flat}
            className="img-intro"
            alt="an image showing a very flat cake"
          />
        </div>
      </div>
    </div>
  );
}
