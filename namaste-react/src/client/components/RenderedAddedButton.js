import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { CartContext } from '../common/UserContext';
import { addSelectedItems } from '../redux/CartSlice';

const RenderedAddedButton = ({ item }) => {
  const { cart, setCart } = useContext(CartContext);
  const dispatch = useDispatch();

  const updateCart = (increment) => {
    let updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.card.info.id === item.card.info.id);

    if (existingItemIndex !== -1) {
      if (increment) {
        updatedCart[existingItemIndex] = { ...updatedCart[existingItemIndex] };
        updatedCart[existingItemIndex].count++;
      } else {
        if (updatedCart[existingItemIndex].count === 1) {
          updatedCart = updatedCart.filter((cartItem) => cartItem.card.info.id !== item.card.info.id);
        } else {
          updatedCart[existingItemIndex] = { ...updatedCart[existingItemIndex] };
          updatedCart[existingItemIndex].count--;
        }
      }
    } else {
      updatedCart.push({ ...item, count: 1 });
      // dispatch(addSelectedItems({...item, count:1}))
    }
    console.log("UPDATED CART", updatedCart)
    setCart(updatedCart);
    dispatch(addSelectedItems(updatedCart))


  };

  console.log("Cart Cart", cart)

  return (
    <div>
      <div key={item.id}>
        {!cart.find((cartItem) => cartItem.card.info.id === item.card.info.id) ? (
          <button onClick={() => updateCart(true)}>Add +</button>
        ) : (
          <div>
            <button onClick={() => updateCart(false)}>-</button>
            <span>{cart.find((cartItem) => cartItem.card.info.id === item.card.info.id)?.count || 0}</span>
            <button onClick={() => updateCart(true)}>+</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RenderedAddedButton;
