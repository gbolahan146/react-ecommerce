import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <h2>Foldables</h2>

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>


        <div className="socials">
              <i className="fa fa-facebook">
                <a href="#" ></a>
              </i>
              <i className="fa fa-instagram">
                <a href="#" ></a>
              </i>
              <i className="fa fa-twitter">
                <a href="#" ></a>
              </i>
              </div>
      </footer>
    </div>
  );
}
