import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { getUser, removeUserSession } from "../Utils/Common";
import dataproduct from "../dataproduct";
import Basket from "./Basket";
import data from "../data";
import axios, { setData } from "axios";
import Main from "./Main";
import Header from "./Header";
import { useState } from "react";


export const Dashboard = (props) => {
  const user = getUser();

  //const productlist = dataproduct.products
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:4000/product',
      );
      
      setProducts(result.data)
      console.log(result.data)
    };
 
    fetchData();
  }, []);

  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login')
  }


  const productlist = dataproduct.products
  //const [ products, setProducts ] = useState(productlist);
  //const { products } = dataproduct;
  
  
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    const productItem = products.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      setProducts(
        products.map((x) =>
          x.id === product.id ? { ...productItem, qty: productItem.qty - 1 } : x
        )
      );


    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      setProducts(
        products.map((x) =>
          x.id === product.id ? { ...productItem, qty: productItem.qty - 1 } : x
        )
      );
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    const productItem = products.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
      setProducts(
        products.map((x) =>
          x.id === product.id ? { ...productItem, qty: productItem.qty + 1 } : x
        )
      );
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
      setProducts(
        products.map((x) =>
          x.id === product.id ? { ...productItem, qty: productItem.qty + 1 } : x
        )
      );
    }
  };

  return (
    <div className="Home">
      <Header countCartItems={cartItems.length}></Header>
      Hello {user.name} <br />
      <br />
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
      <input type="button" value="Logout" onClick={handleLogout} />
      <br />
      <br />
      <img src={logo} alt="Logo" />;
    </div>
  );
};

// export default Home;

