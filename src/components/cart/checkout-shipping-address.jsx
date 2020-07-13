import React from "react";
import StateDrop from "../StateDrops";

import ItemForm from "../commons/itemForm";
const Address = ({ address, address2, city, state, zip }) => {
  return (
    <div>
      <div className="form form-row">
        <div class="form-group col-md-12">
          <ItemForm label="Address" name="address" value={address} />
        </div>
      </div>
      <div className="form form-row">
        <div class="form-group col-md-12">
          <ItemForm label="Address Line 2" name="address2" value={address2} />
        </div>
      </div>
      <div className="form form-row">
        <div class="form-group col-md-4">
          <ItemForm label="Zip" name="zip" value={zip} />
        </div>
      </div>
      <div className="form form-row">
        <div class="form-group col-md-6">
          <ItemForm label="City" name="city" value={city} />
        </div>
        <div class="form-group col-md-6">
          <StateDrop label="State" name="state" value={state} />
        </div>
      </div>

      <div className="form form-row">
        <div class="form-group col-md-6">
          {/* <button className="btn btn-primary" onClick={previous}>
            Previous
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Address;
