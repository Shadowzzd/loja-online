
import { useState } from 'react';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';



function App() {

  const [cartItems, setCartItems] = useState([]);


  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleRemoveFromCart = (param) => {
    console.log('handleRemoveFromCart chamado com:', param);
    if (Array.isArray(param) && param.length === 0) {
      setCartItems([]);
    } else {
      const productId = param;
      setCartItems(cartItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0));
    }
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0 );

  };
  return (
    <>
      <h1>Minha Loja Online</h1>
      <ProductList onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} getTotal={getTotal} />
    </>
  );
}

export default App
