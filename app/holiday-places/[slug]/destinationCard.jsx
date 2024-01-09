"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ImLocation } from "react-icons/im";
import { useRouter } from "next/navigation";
import StarRating from "@/components/StarRating";
import styles from "./destinationCard.module.css";

const DestinationCard = ({
  city,
  hotelName,
  imageUrl,
  location,
  pricePerDay,
  packagePrice,
  rating,
}) => {
  const router = useRouter();
  const [userRating, setUserRating] = useState(0);

  const cityInUrl = city.toLowerCase().replace(/\s+/g, "-");
  const hotelNameInUrl = hotelName.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    setUserRating(rating);
  }, [rating]);

  return (
    <div className={styles.main}>
      <div className={styles.cardLeft}>
        <Image
          src={imageUrl}
          height={200}
          width={250}
          alt="Hotel Picture"
          className={styles.cardPic}
        />
      </div>
      <div className={styles.card2}>
        <div className={styles.cardMiddle}>
          <h2>{hotelName}</h2>
          <div className={styles.location}>
            <ImLocation className={styles.icon} />
            <span>{location}</span>
          </div>
          <br />
          <StarRating rating={userRating} />
        </div>
        <div className={styles.cardRight}>
          <span className={styles.cardRightSpan}>Starts from</span>
          <p className={styles.pricePara}>
            <span className={styles.discount}>50% OFF</span>{" "}
            <span className={styles.price}>BDT{pricePerDay}</span>
            /Night
          </p>
          <p className={styles.pricePara}>
            <span className={styles.price}>BDT{packagePrice}</span>/Package
          </p>
          <span className={styles.vat}>*Price includes VAT & Tax</span>
          <button
            onClick={() =>
              router.push(`/holiday-places/${cityInUrl}/${hotelNameInUrl}`)
            }
            className={styles.inputButton}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
