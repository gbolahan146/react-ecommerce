import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const Header = () => {
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
                                Cart <i className="fa fa-cart-arrow-down"></i>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;




