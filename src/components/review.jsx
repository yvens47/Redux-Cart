import React from "react";
import Avatar from "@material-ui/core/Avatar";

const Review = ({ review }) => {
  return (
    <div className="review border-bottom p-2 mb-2">
      <div className="media">
        <Avatar alt="Remy Sharp" src={review.profile_pic} />
        <div className="media-body">
          <h5 className="mt-0">{review.reviewer}</h5>
          {review.review_text}
        </div>
      </div>
    </div>
  );
};

export default Review;
