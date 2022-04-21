import { useContext } from 'react';
import { CartContext } from '../../../contexts/cart.context';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);
  return (
    <div>
      <h1>Checkout page</h1>
      {cartItems.map(cartItem => {
        const { id, name, quantity } = cartItem;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <span>{quantity}</span>
            <span onClick={() => removeItemFromCart(cartItem)}>Decrement</span>
            <span onClick={() => addItemToCart(cartItem)}>Increment</span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
