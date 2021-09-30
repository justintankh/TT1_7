import React from "react";
import logo from "../assets/logo.png";
import { getUser, removeUserSession } from "../Utils/Common";
import { useState } from "react";
import Products from "./Products";
import Product from "./Product";

export const Dashboard = (props) => {
  const [products, SetProducts] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category_id: 3,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      qty: 50,
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category_id: 3,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      qty: 50,
    },
  ]);

  const user = getUser();

  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };
  return (
    <div className="Home">
      <h4>Welcome to Dashboard</h4>
      Hello {user.name} <br />
      <br />
      <input type="button" value="Logout" onClick={handleLogout} />
      <br />
      <br />
      <img src={logo} alt="Logo" />;
      <Products products={products} />;
    </div>
  );
};

// export default Home;
