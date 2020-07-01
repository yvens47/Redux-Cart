import React from "react";

import { Link } from "react-router-dom";
const Colmd = ({ image, title, text }) => {
  return (
    <div className="col-md-4">
      <div className="icon-wrapper">
        <img className="rounded" src={image} alt={title} />
      </div>
      <p className="title text-center">{title} </p>
      <p class="subtitle text-center">{text}</p>
      <p className="text-center">
        <Link to="/store" className="btn btn-primary">
          View mover
        </Link>
      </p>
    </div>
  );
};

export default Colmd;
