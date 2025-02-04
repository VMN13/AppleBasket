import React, { useEffect, useState } from "react";
import CartHeader from "../cartHeader";
import Product from "../product/Product";
import CartFooter from "../cartFooter";
import data from "../../data";

const Cart = (
) => {

const [cart, setCart] = useState(data);
const [total, setTotal] = useState({
  price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
  count: cart.reduce((prev, curr) => prev + curr.count, 0)
})

useEffect(() => {
  setTotal({
    price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
    count: cart.reduce((prev, curr) =>  prev + curr.count, 0)
  })
}, [cart]);

const deleteProduct = (id) => {
  console.log('Delete!!!', id);
  setCart(cart.filter((product) => product.id!== id));
}

const increaseProductCount = (id) => {
  console.log('Increase!!!', id);
  
  setCart((cart) => {
    return cart.map((product) => {
      if (product.id === id) {
        return {...product, count: product.count + 1, 
          priceTotal: product.count * product.price};
      }
      return product;
    })
  })
}
const decreaseProductCount = (id) => {
  console.log('Decrease!!!', id);
    
  setCart((cart) => {
    return cart.map((product) => {
      if (product.id === id) {
        const newCount = product.count - 1 > 1 ? product.count - 1 : 1
        return {
          ...product, 
          count: newCount,
          priceTotal: newCount * product.price};
      }
      return product;
    })
  });
};

const increase = (id) => {
}

const decrease = (id) => {
}

const changeValue = (id, value) => {
  setCart((cart) => {
    return cart.map((product) => {
      if (product.id === id) {
        return {
          ...product, 
          count: value, 
          priceTotal: value * product.price};
      }
      return product;
    })
  });
};

const products = cart.map((product) => {
  return (
    <Product 
      product={product} 
      key={product.id} 
      deleteProduct={deleteProduct} 
      increase={increaseProductCount} 
      decrease={decreaseProductCount} 
      changeValue={changeValue}
      />
)});

  return (
    <>
      <CartHeader />
        {products}
      <CartFooter 
        total={total} />
    </>
  );
};

export default Cart;
