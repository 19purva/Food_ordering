import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart,totalAmount,getTotalCartAmount } = useContext(StoreContext);


  const navigate=useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-tittle">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="cart-items-tittle  cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>RS. {item.price}.00</p>
                  <p>{cartItems[item._id]}</p>
                  <p>RS. {item.price * cartItems[item._id]}.00</p>
                  <p className="cross" onClick={()=>removeFromCart(item._id)}>x</p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="card-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{10}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>total</b>
              <b>Rs {getTotalCartAmount()+10}</b>
            </div>
           
          </div>
          <button>proceed To Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If  You have a Promo code,Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promocode" />
              <button onClick={()=>navigate('/order')}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
