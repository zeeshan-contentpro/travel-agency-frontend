import React from "react";
import styles from "./page.module.css";
import StarRating from "@/components/StarRating";

const HotelDeals = () => {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <h1>DERA RESORT & SPA COX&apos;S BAZAR</h1>
        <p>18th December 2023 - 21st December 2023 2 Persons - 1 Rooms</p>
      </div>
      <div className={styles.img}></div>
      <div className={styles.detailsContainer}>
        <h2>Dera Resort & Spa Cox&apos;s Bazar</h2>
        <div className={styles.details}>
          <div className={styles.left}>
            <StarRating />
            <p>Inani, Jaliapalong, Ukhia, Cox&apos;s Bazar</p>
          </div>
          <div className={styles.right}>
            <p>Price starts from</p>
            <p>BDT 5,300</p>
          </div>
        </div>
      </div>
      <div className={styles.rooms}></div>
      <div className={styles.amenities}></div>
      <div className={styles.about}>
        <h3>About this hotel</h3>
        <h4>General</h4>
        <article>
          DERA Resort & Spa is a Five Star world class resort gives you an
          extraordinary experience with its all-inclusive luxury features and
          amenities. Its thematically built design gives an unforgettable taste
          of relaxation and comfort to people of all ages. With the motto “meet
          your needs” it intends to provide quality services and an environment
          in the calmness of nature, surrounded by picturesque hills on one side
          and a vast sea on the other. One can experience nature and its
          quietness amid tranquility and peace. It offers a calm and comfortable
          stay in the most eloquently built villas where one can also demand the
          finest meals and bites meeting superior culinary tastes.
        </article>
      </div>
      <div className={styles.note}>
        <h3>Important - Please Note:</h3>
        <p>Additional Facts:</p>
        <ul>
          <li>
            Extra beds are dependent on the room you choose. Price for an extra
            bed will be 2500 BDT.
          </li>
          <li>Check in from: 02:00 PM</li>
          <li>Check Out until: 11:00 AM</li>
          <li>Reception Open Until: 11:00 PM</li>
        </ul>
        <p>Child Policy:</p>
        <ul>
          <li>
            Extra beds are dependent on the room you choose. Children above 0
            and below 4 stay for free if using existing bedding. If extra bed is
            requested, additional charge will be added.
          </li>
          <li>Children aged above 5 and below 10 will have to pay 2500 BDT.</li>
          <li>
            Traveler aged above 10 will be considered as adult and will have to
            use an extra bed which will incur additional charge.
          </li>
        </ul>
        <p>Payment accepted by the property:</p>
        <ul>
          <li>Visa, Master</li>
          <li>bKash</li>
          <li>Amex</li>
        </ul>
      </div>
    </div>
  );
};

export default HotelDeals;
