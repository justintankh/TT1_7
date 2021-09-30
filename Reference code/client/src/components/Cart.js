import { Component } from "react";

import BubbleAlert from "./BubbleAlert";
import DetailCart from "./DetailCart";

class Cart extends Component {
  render() {
    const { cart, cartIsVisible, showCart } = this.props;
    const quantityProducts = cart.reduce((acc, p) => acc + p.quantity, 0);

    return (
      <div>
        <span style={styles.bubble}>
          {quantityProducts !== 0 ? (
            <BubbleAlert value={quantityProducts} />
          ) : null}
        </span>
        <button onClick={showCart} style={styles.cart}>
          Carro
        </button>
        {cartIsVisible ? <DetailCart cart={cart} /> : null}
      </div>
    );
  }
}

const styles = {
  cart: {
    backgroundColor: "#359A2C",
    color: "#FFF",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    left: 12,
    top: 20,
  },
};

export default Cart;
