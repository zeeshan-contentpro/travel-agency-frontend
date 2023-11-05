import Image from "next/image";
import { ImLocation } from "react-icons/im";
import StarRating from "@/components/StarRating";
import styles from "./destinationCard.module.css";

const DestinationCard = () => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.cardLeft}>
          <Image
            src="/images/thai-01.jpeg"
            height={200}
            width={250}
            alt="Hotel Picture"
          />
        </div>
        <div className={styles.cardMiddle}>
          <h2>AMA Holiday Resort & Spa</h2>
          <div className={styles.location}>
            <ImLocation className={styles.icon} />
            <span>Bali, Indonesia</span>
          </div>
          <StarRating />
        </div>
        <div className={styles.cardRight}>
          <span>Starts from</span>
          <p className={styles.pricePara}>
            <span className={styles.discount}>50% OFF</span>{" "}
            <span className={styles.price}>BDT4,800</span>
            /Night
          </p>
          <span className={styles.vat}>*Price includes VAT & Tax</span>
          <button className={styles.inputButton}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
