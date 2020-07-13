import React from "react";
import Review from "./review";

const Reviews = ({ reviews }) => {
  return (
    <>
      {reviews.map(review => (
        <Review review={review} />
      ))}
    </>
  );
};

export default Reviews;
