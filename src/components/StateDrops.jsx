import React from "react";

const states = [
  ["NSW", "New South Wales"],
  ["VIC", "Victoria"],
  ["WA", "Western Australia"]
];

const StateDrop = ({ label, ...others }) => (
  <>
    <label>{label}</label>
    <select {...others} className="form-control">
      {states.map(([value, name]) => (
        <option value={value}>{name}</option>
      ))}
    </select>
  </>
);

export default StateDrop;
