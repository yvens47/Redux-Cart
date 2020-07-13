import React, { Component } from "react";

import ProductSize from "./components/commons/button_size";
import "./App.css";
class TestComponents extends Component {
  state = {
    active: ""
  };
  handleSelectedSize = name => {
    this.setState({ active: name });
    console.log(name);
  };
  render() {
    return (
      <>
        {["name1", "name2"].map((product, index) => (
          <ProductSize
            selected={product}
            active={this.state.active === product ? "active-size" : ""}
            clicked={() => this.handleSelectedSize(product)}
          />
        ))}
      </>
    );
  }
}

export default TestComponents;
