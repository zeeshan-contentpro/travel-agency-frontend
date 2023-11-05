import React from "react";
import styles from "./page.module.css";
import HolidayCard from "./holidayCard";

export const metadata = {
  title: "Holiday Places",
  description: "Escape to your dream destination",
};

const Holiday = () => {
  return (
    <>
      <div className={styles.main}>
        <header>
          <h1 className={styles.title}>Explore Your Destinations</h1>
        </header>
      </div>

      <div className={styles.container}>
        <HolidayCard
          imageUrl={
            "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          }
          title="Visit"
          name="Indonesia"
        />
        <HolidayCard
          imageUrl={
            "https://images.unsplash.com/photo-1559628233-eb1b1a45564b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          }
          title="Visit"
          name="Malaysia"
        />
        <HolidayCard
          imageUrl={
            "https://images.unsplash.com/photo-1504203328729-b937e8e102f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          }
          title="Visit"
          name="Thailand"
        />
        <HolidayCard
          imageUrl={
            "https://images.unsplash.com/photo-1521109464564-2fa2faa95858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          }
          title="Visit"
          name="Maldives"
        />
        <HolidayCard
          imageUrl={
            "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          }
          title="Visit"
          name="Indonesia"
        />
        <HolidayCard
          imageUrl={
            "https://images.unsplash.com/photo-1559628233-eb1b1a45564b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          }
          title="Visit"
          name="Malaysia"
        />
        <HolidayCard
          imageUrl={
            "https://images.unsplash.com/photo-1504203328729-b937e8e102f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          }
          title="Visit"
          name="Thailand"
        />
        <HolidayCard
          imageUrl={
            "https://images.unsplash.com/photo-1521109464564-2fa2faa95858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          }
          title="Visit"
          name="Maldives"
        />
        <HolidayCard
          imageUrl={
            "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          }
          title="Visit"
          name="Indonesia"
        />
        <HolidayCard
          imageUrl={
            "https://images.unsplash.com/photo-1559628233-eb1b1a45564b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          }
          title="Visit"
          name="Malaysia"
        />
        <HolidayCard
          imageUrl={
            "https://images.unsplash.com/photo-1504203328729-b937e8e102f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          }
          dtitle="Visit"
          name="Thailand"
        />
        <HolidayCard
          imageUrl={
            "https://images.unsplash.com/photo-1521109464564-2fa2faa95858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          }
          title="Visit"
          name="Maldives"
        />
      </div>
    </>
  );
};

export default Holiday;
