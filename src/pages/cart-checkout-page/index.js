import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.scss'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

const CartCheckoutPage = (props) => {
  const { cartItems, cartTotalPrice } = props;
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='main-cart'>
          <div className='shop-text'>
            <h3>Shopping Cart</h3>
          </div>
          <div className='cart-wrapper'>
          { cartItems.length ?
            cartItems.map(cartItem => {
              return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            })
            :
            <div style={{textAlign: "center"}}>Your cart is empty xx</div>
          }
          </div>       
          <div className='total'>
            <div>
              <Link className='goback' to = './products'> &larr; Continue Shopping</Link>
            </div>
            <div>
              <span style={{color: "#8d8f97"}}>Subtotal: </span>${cartTotalPrice}.00
            </div>

          </div>

        </div>
        <div className='checkout'>
          <div className='content'>
            <h3 className='card-details'>Card Details</h3>
            <div className='card-type'>
              <p className='card-type-text'>Card Type</p>
              <div className='card-design'>
                <div className='smart-card'>
                    <div className='card-details'>
                        <span style={{fontSize: 24}}>VISA</span>
                        <div> **** **** **** **** </div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <span>Ciroma Chukukwa</span>
                            <span>11/22</span>
                        </div>
                    </div>
                </div>
                <div className='mastercard'>
                    <i class="mastercard-icon"></i>
                    <span>mastercard</span>
                </div>
              </div>
            </div>
            <div>
              <form>
                <label className='card-type-text' for='name'>Name on Card</label>
                <input className='credit-card' id='name' placeholder='CIROMA ADEKUNLE CHUKWUMA' type='text'required/>

                <label className='card-type-text' for="ccn">Credit Card Number:</label>
                <input className='credit-card' id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="**** **** **** ****"></input>
              
                <div className='expcvv'>
                  <div className='expc'>
                    <label className='card-type-text' for='exp'>Expiration Date</label>
                    <div className='mmyywrap'>
                      <select className='credit-card expp' name='expMonth'>
                        <option> mm </option>
                          <option value="January">01</option>
                          <option value="Febuary">02</option>
                          <option value="March">03</option>
                          <option value="April">04</option>
                          <option value="May">05</option>
                          <option value="June">06</option>
                          <option value="July">07</option>
                          <option value="August">08</option>
                          <option value="September">09</option>
                          <option value="October">10</option>
                          <option value="November">11</option>
                          <option value="December">12</option>
                      </select>

                      <select className='credit-card expp' name="expYear">
                        <option>yyyy</option>
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                      </select>
                    </div>
                  </div>
                  <div className='pcvv'>
                    <label className='card-type-text' for='cvv'>CVV</label>
                    <input className='credit-card cvv' id='name' placeholder='XXX' type='text' required/>
                  </div>
                </div>


                <input className='checkout-btn' value='Check Out' type='submit'/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    cartItems: state.japacart.cartItems,
    cartTotalPrice: state.japacart.cartItems.reduce((acc, arr) => acc + (arr.quantity * arr.price.substring(1)), 0)
  }
}

export default connect(mapStateToProps)(CartCheckoutPage);
