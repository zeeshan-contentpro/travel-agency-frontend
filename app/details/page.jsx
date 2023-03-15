import styles from "./page.module.css";

export default function page({
  imageUrl = "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
}) {
  return (
    <div
      className={styles.main}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.header}>
        <img src={imageUrl} alt="destination" />

        <br />

        <div className={styles.topContainer}>
          <div className={styles.gallery}>
            <p>All photos</p>
            <p>Map</p>
          </div>
          <div className={styles.priceContainer}>
            <div className={styles.left}>
              <h2>Adaaran Club Rannalhi</h2>
              <h4>MALDIVES ISLANDS MALE CITY AND AIRPORT</h4>
            </div>

            <div className={styles.right}>
              <small>from</small>
              <h2>৳1,61,457.00</h2>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <h1>Adaaran Club Rannalhi, Maldives</h1> <br />
          <p>DURATION : 4 DAYS & 3 NIGHTS</p>
          <p>AIRFARE : NO</p>
          <p>COUNTRY : MALDIVES</p>
          <br />
          <p>
            The Maldives consists of 1,190 islands located in the Indian Ocean,
            southwest of India. They offer seclusion, breathtaking ocean views,
            and the most luxurious overwater villas in the World. Amazing scuba
            diving, snorkeling, and surfing help make the Maldives a unique and
            fantastic beach destination.
          </p>
          <br />
          <br />
          <h3>Holiday Inclusions</h3>
          <br />
          <ul>
            <li>
              Meal Type at Resort: Half Board / Full Board / All-Inclusive
            </li>
            <li>Return shared Transfer from Jetty to Resort</li>
            <li>All Service Charges</li>
            <li>All Taxes</li>
          </ul>
          <br />
          <br />
          <h3>Holiday Exclusions</h3>
          <br />
          <ul>
            <li>
              Airfare (US Bangla: Starting from 40,000 taka per person approx.
              ***Depends on time and availability)
            </li>
            <li> Visa Fee or, Port Entry Fee (If Any)</li>
            <li>Tips</li>{" "}
            <li> Any Personal Activities Covid-19 Test (if any)</li>
          </ul>
          <br />
          <br />
          <p>
            <b>
              Remarks: *Booking Window: Till 31 Jan 2023 <br /> Travel Window:
              11 Jan-30 April 2023 (Subject to Availability) <br /> *Minimum
              Stay 3Nights Required* <br /> Minimum 2 Adults Required <br />
              3N Sunrise Water Villa with Plunge Pool & Jacuzzi: 161,457/- per
              Adult with AI (Breakfast, Lunch, dinner, snacks, drinks, and
              non-motorized water sports)
            </b>
            <br />
            <br />
            Add City Hotel: Season Holidays, Hulhumale (Super Deluxe Sea view),
            or Similar with BB & shared Car Transfer: 15,000/- per night for 2
            Adults
            <br />
            *Due to the instability of the dollar exchange rate, the price could
            change anytime. <br /> Child supplement (02-11.99yrs): 50% of adult
            prices <br />
            <br />
            Inclusions:
          </p>
          <ul>
            <li>3night Sunrise Water Villa with Plunge Pool & Jacuzzi </li>
            <li>
              All-Inclusive basis Meals (•All-inclusive: Buffet-style breakfast,
              lunch, and dinner in your allocated restaurant • Selected drinks
              by the glass including bottled water, house wine, draught beer,
              and a selection of cocktails • Selected snacks • Wi-Fi.)
            </li>
          </ul>
          <br />
          <br />
          <p>
            Return shared Speedboat transfer Payment Policy: <br /> <br />{" "}
            Advance booking fee: <br /> <br /> 1. 80% advanced payment while
            confirming the booking <br /> 2. Rest 20% can be paid before 14 days
            of the tour, if the tour date is within 14 days then full payment is
            required
          </p>
          <br />
          <br />
          <br />
          <h3>Refund/Return policy</h3>
          <br />
          <br />
          <b>
            Most of our holiday packages are non refundable but in some cases we
            may allow the cancellation and do the refund:
          </b>
          <br />
          <p>If you cancel the holiday then the refund criteria will be:</p>
          <br />
          <p>
            You, or any member of your party, may cancel their travel
            arrangements at any time. Written notification or an e-mail to that
            effect from the person who made the booking must be received at our
            offices. The applicable cancellation charges are as per the
            published refund policy below:
          </p>
          <br />
          <br />
          <b>Refund charges:</b> <br />
          <br />
          <ul>
            <li>Prior to 45 days or more: Booking Fee</li>

            <li>Between 44-31 days ahead of departure: 50% of tour cost</li>
            <li>Between 30-16 days of departure: 75% of tour cost</li>
            <li>15 days to date of departure: 100%</li>
            <li>In case of no show: 100%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
