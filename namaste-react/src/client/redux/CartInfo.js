import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RestuarentCategoryItemList from '../components/RestuarentCategoryItemList';
import { clearCart } from './CartSlice';
import { useNavigate } from 'react-router-dom';

const CartInfo = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems, "cartItems")
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClearCart = (e) => {
      if (e.ctrlKey && e.key === 'm') {
        dispatch(clearCart());
      }
    };

    document.addEventListener('keydown', handleClearCart);

    return () => {
      document.removeEventListener('keydown', handleClearCart);
    };
  }, [dispatch]);


  useEffect(() => {
    return () => {
      dispatch(clearCart());
    };
  },[]);

  return (
    <div>
      <span>Note : press CTRL + M to clear the cart</span>
      <button className='btn btn-outline-danger'>
        Clear Cart
      </button>
      {cartItems.length === 0 ? (
        <>
          <h1>Your Cart Is Empty</h1>
          <button className='btn-success btn rounded-2 p-2' onClick={() => navigate('/')}>
            Add Items
          </button>
        </>
      ) : (
        <div className='container rounded-2' style={{ background: '#e9ecef' }}>
          <RestuarentCategoryItemList items={cartItems} />
          <button className='btn-success btn rounded-2 p-2' onClick={() => navigate('/')}>
            Add Items
          </button>
        </div>
      )}
    </div>
  );
};

export default CartInfo;
