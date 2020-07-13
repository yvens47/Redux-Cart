import React from "react";
const SelectOtion = ({ options, event }) => {
  return (
    <select class="form-control" onChange={event}>
      {options.map(option => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export default SelectOtion;
