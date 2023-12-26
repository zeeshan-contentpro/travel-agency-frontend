"use client";
import Image from "next/image";
import styles from "./honeymoonPackageCard.module.css";
import Link from "next/link";

export default function HoneymoonPackageCard({
  imageUrl,
  city,
  country,
  duration,
}) {
  return (
    <div className={styles.main}>
      {/* //TODO: need to fix the height and width */}
      <Image src={imageUrl} alt="" width={200} height={100} />
      <div className={styles.container}>
        <h3>
          {city}, {country}
        </h3>
        <small>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
          doloremque libero temporibus porro.
        </small>
        <p>{duration}</p>
        <Link href="/details">
          <button>View more</button>
        </Link>
      </div>
    </div>
  );
}
