import styles from "./page.module.css";
export default function page() {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <img
                    src="https://images.unsplash.com/photo-1608796239406-364d337e3c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                    alt=""
                />
            </div>
        </div>
    );
}
