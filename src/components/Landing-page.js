import React from 'react';
import Header from './Header';
import Footer from './Footer';

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
