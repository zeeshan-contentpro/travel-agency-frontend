"use client";
import Image from "next/image";
import styles from "./honeymoonPackageCard.module.css";
import Link from "next/link";

export default function HoneymoonPackageCard({
  imageUrl,
  city = "n/a",
  country = "n/a",
  duration = "n/a",
}) {
  return (
    <div className={styles.main}>
      {/* //TODO: need to fix the height and width */}
      <Image src={imageUrl} alt="" width={250} height={300} />
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
