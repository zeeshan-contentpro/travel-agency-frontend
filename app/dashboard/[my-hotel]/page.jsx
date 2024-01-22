"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useSession } from "next-auth/react";

function MyHotel() {
  const [hotel, setHotel] = useState(null);
  const pdfRef = useRef();

  const { data: session } = useSession();

  useEffect(() => {
    // Retrieve data from localStorage
    const dataFromLocalStorage = localStorage.getItem("hotelInfo");
    if (dataFromLocalStorage) {
      const parsedData = JSON.parse(dataFromLocalStorage);
      setHotel(parsedData);
    }
  }, []);

  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 18;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("booking.pdf");
    });
  };

  let uniqueId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  return (
    <>
      <div ref={pdfRef} className={styles.main}>
        <div className={styles.inner1}>
          <div className={styles.inner1Left}>
            <Image
              className={styles.logo}
              src="/logo.svg"
              alt="logo"
              width={200}
              height={40}
            />
          </div>
          <div className={styles.inner1Right}>
            <h2>Booking Confirmation</h2>
            <h4>
              Please present either an electronic or paper copy of your booking
              confirmation upon check-in.
            </h4>
          </div>
        </div>
        <hr />
        <br />
        <div className={styles.inner2}>
          <div className={styles.inner2Left}>
            <table className={styles.bankInfoTable}>
              <tbody>
                <tr className={styles.bankInfoTable1}>
                  <th>Booking ID</th>
                  <th>:</th>
                  <th>{uniqueId() + uniqueId()}</th>
                </tr>

                <tr className={styles.bankInfoTable1}>
                  <th>Booking Referenece No</th>
                  <th>:</th>
                  <th>{uniqueId()}</th>
                </tr>

                <tr className={styles.bankInfoTable1}>
                  <th>Client</th>
                  <th>:</th>
                  <th>{session?.user.name}</th>
                </tr>

                <tr className={styles.bankInfoTable1}>
                  <th>Booked Hotel</th>
                  <th>:</th>
                  <th>{hotel ? hotel.hotelName : "N/A"}</th>
                  {/* <th>Abc</th> */}
                </tr>

                <tr className={styles.bankInfoTable1}>
                  <th>Address</th>
                  <th>:</th>
                  <th>{hotel ? hotel.location : "N/A"}</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.inner2Right}>
            <table className={styles.bankInfoTable}>
              <tbody>
                <tr className={styles.bankInfoTable1}>
                  <th>Number of Rooms</th>
                  <th>:</th>
                  <th>1</th>
                </tr>

                <tr className={styles.bankInfoTable1}>
                  <th>Number of Extra Beds</th>
                  <th>:</th>
                  <th>0</th>
                </tr>

                <tr className={styles.bankInfoTable1}>
                  <th>Number of Adults</th>
                  <th>:</th>
                  <th>2</th>
                </tr>

                <tr className={styles.bankInfoTable1}>
                  <th>Number of Children</th>
                  <th>:</th>
                  <th>0</th>
                </tr>

                <tr className={styles.bankInfoTable1}>
                  <th>Room Type</th>
                  <th>:</th>
                  <th>Queen Studio</th>
                </tr>
                <tr className={styles.bankInfoTable1}>
                  <th>Promotion</th>
                  <th>:</th>
                  <th>N/A</th>
                </tr>
              </tbody>
            </table>
            <p>
              For Full Promotion details and conditions see confirmation email
            </p>
          </div>
        </div>
        <br />
        <div className={styles.inner3}>
          <p>
            Cancellation Policy: This booking is Non-Refundable and cannot be
            ammended or modified. Failure to arrive at your hotel or property
            will be treated as a No-Show and No-Refund will be given.
          </p>
        </div>
        <br />
        {/* <div className={styles.inner4}>
          <p>Benefits Included: -</p>
        </div> */}
        <br />
        <div className={styles.inner5}>
          <div className={styles.inner5Left}>
            <div className={styles.content1}>
              <h5>Check-in: April 25, 2024</h5>
              <h5>Check-out: April 28, 2024</h5>
            </div>
            <div className={styles.content2}>
              <h5>Payment Details:</h5>
              <div className={styles.content2bottom}>
                <h5>Payment Method: VISA</h5>
                <h5>Card No: xxxx-xxxx-xxxx-7890</h5>
                <h5>EXP: 1/2026</h5>
              </div>
            </div>
            <div className={styles.content3}>
              <h5>Booked And Payable By:</h5>
              <div>
                <p>Travel Buddy</p>
                <p>Niketon, Gulshan 1</p>
                {/* <p>
                  <span>Note to property: </span> Reservation was made under
                  Travel Buddy booking ID: 111111
                </p> */}
              </div>
            </div>
          </div>
          <div className={styles.inner5Right}>
            <h5>Authorized Stamp & Signature</h5>
          </div>
        </div>
        <br />
        <div className={styles.inner6}>
          <div className={styles.inner6Left}>
            <h5>Remarks:</h5>
            <h5>Included: Towel Charge $20.00</h5>
            <h5>
              All special requests are subject to availability upon arrival
            </h5>
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
      <button onClick={downloadPDF} className={styles.btn}>
        Download PDF
      </button>
    </>
  );
}

export default MyHotel;
