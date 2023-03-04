import styles from "./header.module.css";

export default function Header() {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>
                Escape to your dream destination.
            </h1>
            <p className={styles.subTitle}>
                Explore the world with us and create unforgettable memories that
                will last a lifetime. Let us take care of the details, so you
                can focus on the adventure. Escape to your dream destination with ease - Let us take you there!
            </p>
            <div className={styles.container}>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Select a destination..."
                />
                <button>Search</button>
            </div>
        </div>
    );
}
