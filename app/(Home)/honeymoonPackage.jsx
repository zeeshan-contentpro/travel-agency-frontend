import styles from "./honeymoonPackage.module.css";
import HoneymoonPackageCard from "./honeymoonPackageCard";

export default function HoneymoonPackages() {
    return (
        <div className={styles.main}>
            <div className={styles.cover}>
                <h1 className={styles.title}>Honeymoon Offers</h1>
            </div>

            <div className={styles.container}>
                <div className={styles.box}>
                    <HoneymoonPackageCard
                        imageUrl={
                            "https://images.unsplash.com/photo-1574223706388-0e0f6f0390b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                        }
                        name="Bali, Indonesia"
                        duration="3 days and 4 nights"
                    />
                    <HoneymoonPackageCard
                        imageUrl={
                            "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                        }
                        name="Kuala lampur, Malaysia"
                        duration="7 days and 8 nights"
                    />
                    <HoneymoonPackageCard
                        imageUrl={
                            "https://images.unsplash.com/photo-1602002418209-55d7a55adf42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                        }
                        name="Pataya, Thailand"
                        duration="2 days and 3 nights"
                    />
                    <HoneymoonPackageCard
                        imageUrl={
                            "https://images.unsplash.com/photo-1602002418211-9d76470fa71f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                        }
                        name="Male, Maldives"
                        duration="4 days and 5 nights"
                    />
                    <HoneymoonPackageCard
                        imageUrl={
                            "https://images.unsplash.com/photo-1574223706388-0e0f6f0390b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                        }
                        name="Bali, Indonesia"
                        duration="3 days and 4 nights"
                    />
                    <HoneymoonPackageCard
                        imageUrl={
                            "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                        }
                        name="Kuala lampur, Malaysia"
                        duration="7 days and 8 nights"
                    />
                    <HoneymoonPackageCard
                        imageUrl={
                            "https://images.unsplash.com/photo-1602002418209-55d7a55adf42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                        }
                        name="Pataya, Thailand"
                        duration="2 days and 3 nights"
                    />
                    <HoneymoonPackageCard
                        imageUrl={
                            "https://images.unsplash.com/photo-1602002418211-9d76470fa71f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                        }
                        name="Male, Maldives"
                        duration="4 days and 5 nights"
                    />
                </div>
            </div>
        </div>
    );
}
