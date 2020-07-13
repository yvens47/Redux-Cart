import React, { Component } from "react";
import { useForm, useStep } from "react-hooks-helper";
import Address from "./checkout-shipping-address";
import PaymentInfo from "./checkout-payment";

const MultiStepForm = () => {
  const steps = [
    { id: "names" },
    { id: "address" },
    { id: "payment" },
    { id: "review" },
    { id: "submit" }
  ];

  const defaultData = {
    firstName: "Jane",
    lastName: "Doe",
    nickName: "Jan",
    address: "200 South Main St",
    address2: "apt x1",
    city: "Anytown",
    state: "CA",
    zip: "90505",
    email: "email@domain.com",
    phone: "+61 4252 454 332"
  };
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 2, steps });
  const { id } = step;
  const props = { formData, setForm, navigation };

  switch (id) {
    //     case "names":
    //       return <Names {...props} />;
    // case "address":
    //   return <Address {...props} />;
     case "payment":
      return <PaymentInfo {...props} />;
    //     case "review":
    //       return <Review {...props} />;
    //     case "submit":
    //       return <Submit {...props} />;
    default:
      return null;
  }
};

export default MultiStepForm;
