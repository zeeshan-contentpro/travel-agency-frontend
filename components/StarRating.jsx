"use client";

import { FaStar } from "react-icons/fa";
import styles from "./StarRating.module.css";

export default function StarRating({ value }) {
  const maxRating = 5;
  const filledStars = Math.floor(value);
  const hasHalfStar = value - filledStars >= 0.5;

  //console.log(hasHalfStar);

  const stars = [];
  let i = 0;

  // Push filled icons
  for (i = 0; i < filledStars; i++) {
    stars.push(<FaStar key={i} size={20} className={styles.star} />);
  }

  // Push half-filled icon if needed
  if (hasHalfStar) {
    stars.push(<FaStar key={i} size={20} className={styles.star} />);
    i++;
  }

  // Push empty icons to fill remaining space
  while (i < maxRating) {
    stars.push(<FaStar key={i} size={20} className={styles.star} />);
    i++;
  }

  return <div className={styles.starContainer}>{stars}</div>;
}
