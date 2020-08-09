import React from 'react';
import Header from './Header';
import Footer from './Footer';


import birthday from './../../assets/img/cakes/birthday/birthday.jpg';
import birthday1 from './../../assets/img/cakes/birthday/birthday1.jpg';
import birthday2 from './../../assets/img/cakes/birthday/birthday2.jpg';
import birthday3 from './../../assets/img/cakes/birthday/birthday3.jpg';
import birthday4 from './../../assets/img/cakes/birthday/birthday4.jpg';
import birthday5 from './../../assets/img/cakes/birthday/birthday5.jpg';

import cup from './../../assets/img/cakes/cup/cup.jpg';
import cup1 from './../../assets/img/cakes/cup/cup1.jpg';
import cup2 from './../../assets/img/cakes/cup/cup2.jpg';
import cup3 from './../../assets/img/cakes/cup/cup3.jpg';
import cup4 from './../../assets/img/cakes/cup/cup4.jpg';

import other1 from '../../assets/img/other1.jpg'


export default function Landing() {
  return (
    <div className="landing">
      {/* <Header />  */}
      {/* landing body */}
      <div className="landing-body">
        <div className="call-to-action">
          <div className="call-buttons">
            <button>Wedding</button>
            <button>Birthday</button>
            <button>Cup cake</button>
            <button>Chocolate</button>
          </div>

          <div className="action call-products">

            <figure>
              <img src={birthday2} className="product" alt="" />
              <figcaption>
                <p className="name">Raspberry cake</p>
                <p className="price">$980</p>
              </figcaption>
            </figure>
            <figure>
              <img src={cup} className="product" alt="" />
              <figcaption>
                <p className="name">Strawberry</p>
                <p className="price">$560</p>
              </figcaption>
            </figure>
            <figure>
              <img src={birthday5} className="product" alt="" />
              <figcaption>
                <p className="name">Cookie cake</p>
                <p className="price">$899</p>
              </figcaption>
            </figure>
            <figure>
              <img src={birthday} className="product" alt="" />
              <figcaption>
                <p className="name">Choco creme</p>
                <p className="price">$700</p>
              </figcaption>
            </figure>
            <figure>
              <img src={cup1} className="product" alt="" />
              <figcaption>
                <p className="name">Lemon cupcake</p>
                <p className="price">$50</p>
              </figcaption>
            </figure>
            <figure>
              <img src={birthday3} className="product" alt="" />
              <figcaption>
                <p className="name">Strawberry creme</p>
                <p className="price">$399</p>
              </figcaption>
            </figure>
            <figure>
              <img src={cup3} className="product" alt="" />
              <figcaption>
                <p className="name">3-layer cupcake</p>
                <p className="price">$90</p>
              </figcaption>
            </figure>
            <figure>
              <img src={other1} className="product" alt="" />
              <figcaption>
                <p className="name">Chocolate cake</p>
                <p className="price">$1000</p>
              </figcaption>
            </figure>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
