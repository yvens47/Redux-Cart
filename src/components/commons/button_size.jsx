import React from "react";

class ProductSize extends React.Component {
  state = {
    active: ""
  };
  render() {
    return (
      <div
        onClick={this.props.clicked}
        className={this.props.active}
        style={{
          height: "45px",
          width: "45px",
          border: "solid 1px #eee",
          float: "left"
        }}
      >
        {this.props.size}
      </div>
    );
  }
}

export default ProductSize;
