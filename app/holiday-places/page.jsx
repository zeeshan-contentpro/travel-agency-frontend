"use client";
import styles from "./page.module.css";
import HolidayCard from "./holidayCard";
import { package_data } from "@/data";

export const metadata = {
  title: "Holiday Places",
  description: "Escape to your dream destination",
};

const Holiday = () => {
  const filteredData = package_data.filter((dt) => dt.country === "Bangladesh");

  console.log(filteredData);

  return (
    <main className={styles.main}>
      <header>
        <h1 className={styles.title}>Explore Your Destinations</h1>
      </header>

      <div className={styles.container}>
        <div className={styles.containerTitle}>
          <h1>Explore Indonesia</h1>
          <article>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium adipisci voluptate, quod quasi numquam iure alias, ut
            corporis nam rem quo saepe voluptas odio.
          </article>
        </div>
        <div className={styles.cardContainer}>
          <HolidayCard
            imageUrl={
              "https://images.unsplash.com/photo-1590930754517-64d5fffa06ac?q=80&w=1974&auto=format&fit=crop&w=1035&q=80"
            }
            title="Jakarta"
            name="19 Hotels Available"
          />
          <HolidayCard
            imageUrl={
              "https://images.unsplash.com/photo-1557093793-d149a38a1be8?q=80&w=1974&auto=format&fit=crop&w=1035&q=80"
            }
            title="Ubud"
            name="10 Hotels Available"
          />
          <HolidayCard
            imageUrl={
              "https://images.unsplash.com/photo-1621071437499-a6cbed2219d9?q=80&w=1935&auto=format&fit=crop&w=1035&q=80"
            }
            title="Malang"
            name="3 Hotels Available"
          />
          <HolidayCard
            imageUrl={
              "https://images.unsplash.com/photo-1523539693385-e5e891eb4465?q=80&w=1978&auto=format&fit=crop&w=1035&q=80"
            }
            title="Kuta"
            name="12 Hotels Available"
          />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.containerTitle}>
          <h1>Explore Bangladesh</h1>
          <article>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium adipisci voluptate, quod quasi numquam iure alias, ut
            corporis nam rem quo saepe voluptas odio.
          </article>
        </div>
        <div className={styles.cardContainer}>
          <HolidayCard
            imageUrl={
              "https://images.unsplash.com/photo-1616432124087-1be7870c3aa9?q=80&w=1974&auto=format&fit=crop&w=1035&q=80"
            }
            title="Saint Martin"
            name="19 Hotels Available"
          />
          <HolidayCard
            imageUrl={
              "https://images.unsplash.com/photo-1587222318667-31212ce2828d?q=80&w=2070&auto=format&fit=crop&w=1035&q=80"
            }
            title="Cox's Bazar"
            name="10 Hotels Available"
          />
          <HolidayCard
            imageUrl={
              "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1935&auto=format&fit=crop&w=1064&q=80"
            }
            title="Sylhet"
            name="2 Hotels Available"
          />
          <HolidayCard
            imageUrl={
              "https://images.unsplash.com/photo-1619713277018-c5499173232c?q=80&w=1973&auto=format&fit=crop&w=1035&q=80"
            }
            title="Chattagram"
            name="9 Hotels Available"
          />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.containerTitle}>
          <h1>Explore Thailand</h1>
          <article>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium adipisci voluptate, quod quasi numquam iure alias, ut
            corporis nam rem quo saepe voluptas odio.
          </article>
        </div>
        <div className={styles.cardContainer}>
          <HolidayCard
            imageUrl={
              "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
            }
            title="Bankok"
            name="2 Hotels Available"
          />
          <HolidayCard
            imageUrl={
              "https://images.unsplash.com/photo-1559628233-eb1b1a45564b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
            }
            title="Pattaya"
            name="16 Hotels Available"
          />
          <HolidayCard
            imageUrl={
              "https://images.unsplash.com/photo-1504203328729-b937e8e102f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
            }
            title="Phuket"
            name="3 Hotels Available"
          />
          <HolidayCard
            imageUrl={
              "https://plus.unsplash.com/premium_photo-1669317354987-e786270c6230?q=80&w=1964&auto=format&fit=crop&w=1064&q=80"
            }
            title="Krabi"
            name="13 Hotels Available"
          />
        </div>
      </div>
    </main>
  );
};

export default Holiday;
