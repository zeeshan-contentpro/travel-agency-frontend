import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

  const starArray = [];

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    starArray.push(<FaStar key={i} />);
  }

  // Add half star if needed
  if (hasHalfStar) {
    starArray.push(<FaStar key={"half"} />);
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    starArray.push(<FaRegStar key={`empty-${i}`} />);
  }

  return <div>{starArray}</div>;
};

export default StarRating;
