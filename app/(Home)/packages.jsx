import { package_data } from "@/data/data";
import PackageCard from "./packageCard";
import styles from "./packages.module.css";

export default function Packages() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Our popular packages</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Adipiscing metus felis et cursus
        id facilisis convallis tincidunt neque.
      </p>
      <div className={styles.container}>
        {package_data.map((item) => (
          <PackageCard
            key={item.id}
            imageUrl={item.url}
            city={item.city}
            country={item.country}
            duration="3 days and 4 nights"
          />
        ))}
        {/* <PackageCard
          imageUrl={
            "https://images.unsplash.com/photo-1559628233-eb1b1a45564b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          }
          name="Kuala Lumpur, Malaysia"
          duration="7 days and 8 nights"
        />
        <PackageCard
          imageUrl={
            "https://images.unsplash.com/photo-1504203328729-b937e8e102f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          }
          name="Pataya, Thailand"
          duration="2 days and 3 nights"
        />
        <PackageCard
          imageUrl={
            "https://images.unsplash.com/photo-1521109464564-2fa2faa95858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          }
          name="Male, Maldives"
          duration="4 days and 5 nights"
        />
        <PackageCard
          imageUrl={
            "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          }
          name="Bali, Indonesia"
          duration="3 days and 4 nights"
        />
        <PackageCard
          imageUrl={
            "https://images.unsplash.com/photo-1559628233-eb1b1a45564b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          }
          name="Kuala lampur, Malaysia"
          duration="7 days and 8 nights"
        />
        <PackageCard
          imageUrl={
            "https://images.unsplash.com/photo-1504203328729-b937e8e102f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          }
          name="Pataya, Thailand"
          duration="2 days and 3 nights"
        />
        <PackageCard
          imageUrl={
            "https://images.unsplash.com/photo-1521109464564-2fa2faa95858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          }
          name="Male, Maldives"
          duration="4 days and 5 nights"
        /> */}
      </div>
    </div>
  );
}
