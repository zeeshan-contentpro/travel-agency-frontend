"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./StarRating.module.css";

export default function StarRating() {
  const [rating, setRating] = useState(null);
  const [ratingColor, setRatingColor] = useState(null);

  return (
    <div className={styles.starContainer}>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <>
            <label htmlFor="">
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
                className={styles.input}
              />
              <FaStar
                key={index}
                size={20}
                className={styles.star}
                color={ratingValue <= (ratingColor || rating ? "red" : "grey")}
                onMouseOver={() => setRatingColor(ratingValue)}
                onMouseOut={() => setRatingColor(null)}
              />
            </label>
          </>
        );
      })}
    </div>
  );
}
