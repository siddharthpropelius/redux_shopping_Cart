import React from 'react';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cart-slice';
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.itemList);
  const quantity = cartItems.length;
  //const quantity = useSelector((state) => state.cart.totalItem);

  const handleOnClick = () => {
    dispatch(cartActions.showCart());
  };
  return (
    <div className="cartIcon" onClick={handleOnClick}>
      <h3>Cart({quantity})</h3>
    </div>
  );
};

export default Cart;
