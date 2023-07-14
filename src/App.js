import React, { useState } from "react";

function ConstructionShop() {
  const [products, setProducts] = useState([
    { id: 1, title: "Product 1", price: 100.0, quantity: 0 },
    { id: 2, title: "Product 2", price: 200.0, quantity: 0 },
    { id: 3, title: "Product 3", price: 250.0, quantity: 0 },
    { id: 4, title: "Product 4", price: 250.0, quantity: 0 }
  ]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const updatedProducts = products.map((p) => {
      if (p.id === product.id) {
        return { ...p, quantity: p.quantity + 1 };
      }
      return p;
    });
    setProducts(updatedProducts);
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (product) => {
    const updatedProducts = products.map((p) => {
      if (p.id === product.id && p.quantity > 0) {
        return { ...p, quantity: p.quantity - 1 };
      }
      return p;
    });
    setProducts(updatedProducts);
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const renderProducts = () => {
    return products.map((product) => (
      <div key={product.id}>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        <button onClick={() => handleRemoveFromCart(product)}>
          Remove from Cart
        </button>
      </div>
    ));
  };

  const renderCartItems = () => {
    return cart.map((item) => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    ));
  };

  return (
    <div>
      <h1>Construction Shop</h1>
      <div>
        <h2>Products</h2>
        {renderProducts()}
      </div>
      <div>
        <h2>Cart</h2>
        {renderCartItems()}
      </div>
    </div>
  );
}

export default ConstructionShop;
