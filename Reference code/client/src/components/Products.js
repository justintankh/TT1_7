mport { Component } from "react";

import Button from './Button'

class Product extends Component {

  render() {
    const { addProduct, product } = this.props
    const { name, price, img } = product

    return (
      <div style={styles.product}>
        <img style={styles.image} alt={name} src={img} />
        
        <h3>{name}</h3>
        
        <p>{price}</p>

        <Button
          onClick={() => addProduct(product)}
        >
          Agregar al carro
        </Button>
      </div>
    )
  }
}

const styles = {
  product: {
    border: '1px solid #EEE',
    boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
    width: '30%',
    padding: '10px 15px',
    borderRadius: '5px'
  },
  image: {
    width: '100%'
  }
}

export default Product