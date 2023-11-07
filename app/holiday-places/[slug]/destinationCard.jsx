import Image from "next/image";
import { ImLocation } from "react-icons/im";
import { useRouter } from "next/navigation";
import StarRating from "@/components/StarRating";
import styles from "./destinationCard.module.css";

const DestinationCard = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.cardLeft}>
          <Image
            src="/images/thai-01.jpeg"
            height={200}
            width={250}
            alt="Hotel Picture"
            // className={styles.picture}
          />
        </div>
        <div className={styles.cardMiddle}>
          <h2>Adaaran Club Rannalhi</h2>
          <div className={styles.location}>
            <ImLocation className={styles.icon} />
            <span>MALDIVES ISLANDS MALE CITY AND AIRPORT</span>
          </div>
          <StarRating />
        </div>
        <div className={styles.cardRight}>
          <span className={styles.cardRightSpan}>Starts from</span>
          <p className={styles.pricePara}>
            <span className={styles.discount}>50% OFF</span>{" "}
            <span className={styles.price}>BDT4,800</span>
            /Night
          </p>
          <span className={styles.vat}>*Price includes VAT & Tax</span>
          <button
            onClick={() => router.push("/details")}
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
