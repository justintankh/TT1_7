import React  from 'react';
import logo from '../assets/logo.png'
import { getUser,removeUserSession } from '../Utils/Common';
import dataproduct from '../dataproduct';
import Basket from './Basket';
import data from '../data';
import Main from './Main';
import Header from './Header';
import { useState } from 'react';



export const Dashboard = (props) => {

  const user = getUser();

  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login')
  }

  //const [ products, setProducts ] = useState({});
  const { products } = dataproduct;
  
  
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  
  return (
    <div className="Home">
      <Header countCartItems={cartItems.length}></Header>
      Hello {user.name} <br /><br />
      <div className="row">
        <Main products ={products} onAdd={onAdd} ></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
      <input type="button" value="Logout" onClick={handleLogout}/><br /><br />
      <img src= {logo} alt="Logo" />;
    </div>
  );
}

// export default Home;