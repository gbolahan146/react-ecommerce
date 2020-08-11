import React from 'react';
import './style.scss';
import { landingPageCakes } from '../../Data';
import MenuItem from '../../components/MenuItem/MenuItem'

const LandingPage = (props) => {
  const { history, match } = props
  
  return (
    <div className='landing'>
      <div className='header'>
        {/* <div className='text-cta'> */}
        <h2 className='header-text'>Find out the sweet story behind our Mastery.</h2>
        <p className='header-subtext'>
          Everything we offer is made right here, from cookies to pasteries to cakes. Name them, we've got you covered.
        </p>
        {/* </div> */}
        {/* <div className='image-cta'>
          <img src={flat} className='img-intro' alt='a very flat cake' />
        </div> */}
      </div>

      {/* landing body */}
      <div className='landing-body'>
        <div className='call-to-action'>
          <div style={{textAlign: "center", marginBottom: 30}}>
          CHOOSE A CATEGORY
            <div className='call-buttons'>
              <button onClick={() => history.push(`${match.url}wedding`)}>Wedding</button>
              <button onClick={() => history.push(`${match.url}birthday`)}>Birthday</button>
              <button onClick={() => history.push(`${match.url}cupcake`)}>Cup cake</button>
              <button onClick={() => history.push(`${match.url}chocolate`)}>Chocolate</button>
            </div>
        </div>


        <div style={{textAlign: "center"}}>
        SOME OF OUR COLLECTIONS
          <div className='action call-products'>

            {
              landingPageCakes.map(item => {
                return (
                  <MenuItem key={item.id} item={item} />
                )
              })
            }


            {/* The Modal */}
            <div id='myModal' className='modal'>
              {/* The Close Button */}
              <span className='close'>&times;</span>

              {/* Modal Content (The Image) */}
              <img className='modal-content' id='img01' alt='' />

              {/* Modal Caption (Image Text) */}
              <div id='caption'></div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default LandingPage;
