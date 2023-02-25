import styles from "./offers.module.css";
import OffersCard from "./offersCard";

export default function Offers() {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Current offers</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur. Adipiscing metus felis
                et cursus id facilisis convallis tincidunt neque.
            </p>
            <div className={styles.container}>
                <div className={styles.left}>
                    <OffersCard
                        imageUrl={
                            "https://images.unsplash.com/photo-1546614409-810f10108b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80"
                        }
                        city="Toronto"
                        price="2500"
                    />
                    <div className={styles.box}>
                        <OffersCard
                            imageUrl={
                                "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }
                            city="London"
                            price="1500"
                        />{" "}
                        <OffersCard
                            imageUrl={
                                "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }
                            city="France"
                            price="3500"
                        />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.box}>
                        <OffersCard
                            imageUrl={
                                "https://images.unsplash.com/photo-1551294674-a8c8eae64edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                            }
                            city="Austria"
                            price="4500"
                        />{" "}
                        <OffersCard
                            imageUrl={
                                "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            }
                            city="Italy"
                            price="3500"
                        />
                    </div>
                    <OffersCard
                        imageUrl={
                            "https://images.unsplash.com/photo-1582882198551-c0d7f863c5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1495&q=80"
                        }
                        city="Dubai"
                        price="2500"
                    />
                </div>
            </div>
        </div>
    );
}
