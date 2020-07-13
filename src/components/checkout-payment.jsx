import React from "react";
//import StateDrop from "./StateDrops";

import ItemForm from "./commons/itemForm";
import Address from "./cart/checkout-shipping-address";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import "braintree-web";
class PaymentInfo extends React.Component {
  instance;
  state = {
    clientToken: null
  };

  componentDidMount = async () => {
    const response = await fetch("http://localhost:5000/braintree/getToken");
    const clientToken = await response.json(); // If returned as JSON string

    this.setState({
      clientToken
    });
  };
  async buy() {
    // Send the nonce to your server
    // Send the nonce to your server
    console.log(this.instance);
    try {
      const { nonce } = await this.instance.requestPaymentMethod();
      const response = await axios.post(
        "http://localhost:5000/checkout",
        nonce
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.submit}>
          <h3>Shipping Information</h3>
          <Address
            address={"5600"}
            address2={"apt1"}
            city={"lancaster"}
            state={"PA"}
            zip={"17657"}
          />
          <h3>Payment Information</h3>
          <div>
            <DropIn
              options={{
                authorization: "sandbox_zj8yms83_s6c9hp3kvmrn7pnn" //this.state.clientToken
              }}
              onInstance={instance => (this.instance = instance)}
            />
            <button
              className="btn btn-primary btn-block"
              onClick={this.buy.bind(this)}
            >
              Buy
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PaymentInfo;
