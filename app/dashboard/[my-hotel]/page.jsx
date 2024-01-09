import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

function MyHotel() {
  return (
    <div className={styles.main}>
      <div className={styles.inner1}>
        <div>
          <Image
            className={styles.logo}
            src="../../../public/logo.svg"
            alt="logo"
            width={300}
            height={50}
          />
        </div>
        <div className={styles.inner1Right}>
          <h2>Booking Confirmation</h2>
          <h4>
            Please present either an electronic or paper copy of your booking
            confiemation upon check-in.
          </h4>
        </div>
      </div>
      <div className={styles.inner2}>
        <div className={styles.inner2Left}>
          <table className={styles.bankInfoTable}>
            <tbody>
              <tr className={styles.bankInfoTable}>
                <th className={styles.bankInfoTable1}>Booking ID</th>
                <th className={styles.bankInfoTable2}>:</th>
                <th className={styles.bankInfoTable}>3333</th>
              </tr>

              <tr className={styles.bankInfoTable}>
                <th className={styles.bankInfoTable1}>Booking Referenece No</th>
                <th className={styles.bankInfoTable2}>:</th>
                <th className={styles.bankInfoTable}>1111</th>
              </tr>

              <tr className={styles.bankInfoTable}>
                <th className={styles.bankInfoTable1}>Client</th>
                <th className={styles.bankInfoTable2}>:</th>
                <th className={styles.bankInfoTable}>Mr. ABC</th>
              </tr>

              <tr className={styles.bankInfoTable}>
                <th className={styles.bankInfoTable1}>Booked Hotel</th>
                <th className={styles.bankInfoTable2}>:</th>
                <th className={styles.bankInfoTable}>XYZ Hotel & Resort</th>
              </tr>

              <tr className={styles.bankInfoTable}>
                <th className={styles.bankInfoTable1}>Address</th>
                <th className={styles.bankInfoTable2}>:</th>
                <th className={styles.bankInfoTable}>Kuta, Thailand</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.inner2Right}>
          <table className={styles.bankInfoTable}>
            <tbody>
              <tr className={styles.bankInfoTable}>
                <th className={styles.bankInfoTable1}>Booking ID</th>
                <th className={styles.bankInfoTable2}>:</th>
                <th className={styles.bankInfoTable}>3333</th>
              </tr>

              <tr className={styles.bankInfoTable}>
                <th className={styles.bankInfoTable1}>Booking Referenece No</th>
                <th className={styles.bankInfoTable2}>:</th>
                <th className={styles.bankInfoTable}>1111</th>
              </tr>

              <tr className={styles.bankInfoTable}>
                <th className={styles.bankInfoTable1}>Client</th>
                <th className={styles.bankInfoTable2}>:</th>
                <th className={styles.bankInfoTable}>Mr. ABC</th>
              </tr>

              <tr className={styles.bankInfoTable}>
                <th className={styles.bankInfoTable1}>Booked Hotel</th>
                <th className={styles.bankInfoTable2}>:</th>
                <th className={styles.bankInfoTable}>XYZ Hotel & Resort</th>
              </tr>

              <tr className={styles.bankInfoTable}>
                <th className={styles.bankInfoTable1}>Address</th>
                <th className={styles.bankInfoTable2}>:</th>
                <th className={styles.bankInfoTable}>Kuta, Thailand</th>
              </tr>
            </tbody>
          </table>
          <p>
            For Full Promotion details and conditions see confirmation email
          </p>
        </div>
      </div>
      <div className={styles.inner3}>
        <p>
          Cancellation Policy: This booking is Non-Refundable and cannot be
          ammended or modified. Failure to arrive at your hotel or property will
          be treated as a No-Show and No-Refund will be given.
        </p>
      </div>
      <br />
      <div className={styles.inner4}>
        <p>Benefits Included: -</p>
      </div>
      <br />
      <div className={styles.inner5}>
        <div className={styles.inner5Left}></div>
        <div className={styles.inner5Right}></div>
      </div>
      <br />
      <div className={styles.inner6}>
        <div className={styles.inner6Left}>
          <h5>Remarks:</h5>
          <h5>Included: Towel Charge $20.00</h5>
          <h5>All special requests are subject to availability upon arrival</h5>
        </div>
        <div className={styles.inner6Right}>
          <h5>Call our Customer Service Center 24/7 :</h5>
          <p>Customer Support: +880 XXXXXXXX, +880 YYYYYYYY</p>
          <p>(Long distance charge may apply)</p>
        </div>
      </div>
      <br />
      <div className={styles.inner7}>
        <h5>Notes</h5>
        <ul>
          <li>
            All rooms are guaranteed on the day of arrival. In the case of a
            No-Show, your room(s) will be released and you will be subject to
            the terms and conditions of the Cancellation/No-Show Policy
            specified at the time you made the booking as well as noted in the
            confirmation email.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyHotel;
