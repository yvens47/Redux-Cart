import React, { useState, useEffect } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%"
    }
  }
}));
const CartItem = ({ item, removeItem, updateQty }) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleChange = ({ target }) => {
    setQuantity(target.value);
    updateQty(item, target.value);
  };
  return (
    <tr>
      <td>
        <div style={{ width: "30%", float: "left" }} className="image-wrapper">
          <img
            style={{ width: "80%", position: "relative", top: "-10px" }}
            src={item.defaultImage}
          />
        </div>
        <div style={{ fontWeight: "bold", width: "70%" }} className="">
          <p>{item.name}</p>
        </div>
      </td>
      <td>${item.price}</td>
      <td>
        <div className="input-wrapper">
          <div className="qty-input">
            <select onChange={handleChange} value={quantity}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i =>
                i === parseInt(quantity) ? (
                  <option selected value={i}>
                    {i}
                  </option>
                ) : (
                  <option value={i}>{i}</option>
                )
              )}
            </select>
          </div>
        </div>
      </td>
      <td>${item.quantity * item.price}</td>
      <td>
        <DeleteForeverIcon onClick={() => removeItem(item._id)} />
      </td>
    </tr>
  );
};

export default CartItem;
