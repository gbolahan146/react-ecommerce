import React from 'react';

import flat from '../../assets/img/cakes/other/flat-cake.jpg'

export default function Header() {
  return (
    <div className="header__base">
          <header>
      <div className="brand">
        <a href="">Foldables</a>
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
          <li className="nav-item">
            <a href="#">Products</a>
          </li>
          <li className="nav-item">
            <a href="#">Sign in</a>
          </li>
          <li className="nav-item">
            <a href="#">
              Cart <i class="fa fa-cart-arrow-down"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <div className="header-intro">
      <img src={flat} />
    </div>
    </div>
  );
}
