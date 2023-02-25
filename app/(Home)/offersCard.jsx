import styles from "./offersCard.module.css";

export default function OffersCard({
    imageUrl,
    city = "Toronto",
    price = "25,000",
}) {
    return (
        <div
            className={styles.main}
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className={styles.container}>
                <h1 className={styles.country}>{city}</h1>
                <small>package starts from</small>
                <h3 className={styles.price}>BDT {price}</h3>
            </div>
        </div>
    );
}
