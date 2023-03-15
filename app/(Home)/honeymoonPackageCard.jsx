"use client";
import styles from "./honeymoonPackageCard.module.css";
import Link from "next/link";

export default function HoneymoonPackageCard({
    imageUrl,
    name = "n/a",
    duration = "n/a",
}) {

    return (
        <div
            className={styles.main}
            // style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <img src={imageUrl} alt="" />
            <div className={styles.container}>
                <h3>{name}</h3>
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
