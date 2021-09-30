import { Component } from "react";

class Button extends Component {
  render() {
    return <button style={styles.button} {...this.props} />;
  }
}

const styles = {
  button: {
    backgroundColor: "#0A283E",
    color: "#FFF",
    padding: "15px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Button;
