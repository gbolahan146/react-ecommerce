import React from 'react';
import Header from './Header';
import Footer from './Footer';

// Import cake images
import wedding1 from '../../assets/img/cakes/wedding/wedding1.jpg';
import wedding2 from '../../assets/img/cakes/wedding/wedding2.jpg';
import wedding3 from '../../assets/img/cakes/wedding/wedding3.jpg';

import birthday2 from './../../assets/img/cakes/birthday/birthday2.jpg';
import birthday3 from './../../assets/img/cakes/birthday/birthday3.jpg';
import birthday5 from './../../assets/img/cakes/birthday/birthday5.jpg';

import cup1 from './../../assets/img/cakes/cup/cup1.jpg';
import cup2 from './../../assets/img/cakes/cup/cup2.jpg';
import cup3 from './../../assets/img/cakes/cup/cup3.jpg';
import cup4 from './../../assets/img/cakes/cup/cup4.jpg';

export default function Landing() {
  return (
    <div className="landing">
      <Header />
      {/* landing body */}
      <div className="landing-body">
        <h3>Body</h3>
      </div>
      <Footer />
    </div>
  );
}
