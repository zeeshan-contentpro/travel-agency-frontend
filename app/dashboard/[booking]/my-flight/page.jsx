"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useSession } from "next-auth/react";

function MyFlight() {
  const [flight, setFlight] = useState(null);
  const pdfRef = useRef();

  const { data: session } = useSession();

  useEffect(() => {
    // Retrieve data from localStorage
    const dataFromLocalStorage = localStorage.getItem("flightBookingStatus");
    if (dataFromLocalStorage) {
      const parsedData = JSON.parse(dataFromLocalStorage);
      setFlight(parsedData);
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

  function getToday() {
    const myDate = new Date();

    let daysList = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let monthsList = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let date = myDate.getDate();
    let month = monthsList[myDate.getMonth()];
    let year = myDate.getFullYear();
    let day = daysList[myDate.getDay()];

    return `${day}, ${month} ${date}, ${year}`;
  }

  let today = getToday();

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
            <h2>Flight Booking Confirmation</h2>
          </div>
        </div>
        <hr />
        <br />
        <div className={styles.inner2}>
          <div>
            <h4>Booking Date</h4>
            <p>{today}</p>
          </div>
          <div>
            <h4>Guest Name</h4>
            <p>{session?.user.name}</p>
          </div>
        </div>
        <hr />
        <div className={styles.inner3}>
          <h2>Flight Details</h2>
          <h4>Route</h4>
          <hr />
          <div className={styles.top}>
            <div>
              <h4>From</h4>
              <p>{flight?.from}</p>
            </div>
            <div>
              <h4>Airline</h4>
              {/* <p>{flight?.airlinesIndex}</p> */}
              <p>US Bangla Airlines</p>
            </div>
            <div>
              <h4>Departure Date</h4>
              <p>{flight?.departing}</p>
            </div>
            <div>
              <h4>Returning Date</h4>
              <p>{flight?.returning}</p>
            </div>
          </div>
          <hr />
          <div className={styles.middle}>
            <div>
              <h4>To</h4>
              <p>{flight?.to}</p>
            </div>
            <div>
              <h4>Flight Number</h4>
              <p>{uniqueId()}</p>
            </div>
            <div>
              <h4>Departure Terminal</h4>
              <p>Terminal 1</p>
            </div>
            <div>
              <h4>Arrival Terminal</h4>
              <p>Terminal 2</p>
            </div>
          </div>
          <hr />
          <div className={styles.bottom}>
            <div>
              <h4>Seat Class</h4>
              <p className={styles.text}>Business Class</p>
            </div>
            <div>
              <h4>Passenger No</h4>
              <p>{flight?.passenger}</p>
            </div>
            <div>
              <h4>Extra Baggage Allowance</h4>
              <p>8Kg</p>
            </div>
            <div>
              <h4>Seat Number</h4>
              <p>3-A</p>
            </div>
          </div>
        </div>
        <br />
        <div className={styles.inner4}>
          <h2>Fare Breakdown</h2>
          <table>
            <tbody>
              <tr>
                <th>Base Fare</th>
                <th>$</th>
              </tr>

              <tr>
                <th>Passenger Service Charge</th>
                <th>$</th>
              </tr>

              <tr>
                <th>Surcharge</th>
                <th>$</th>
              </tr>

              <tr>
                <th>Fuel/Insurance Surcharge</th>
                <th>$</th>
              </tr>

              <tr>
                <th>Ticketing Service Charge</th>
                <th>$</th>
              </tr>

              <tr>
                <th>Total Amount</th>
                <th>${flight?.flightPrice}</th>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.inner5}>
          <h4>Restricted Items or Goods</h4>
          <p>
            We reserve the right to confiscate any item or goods brought by the
            passenger which we believe might bring harm or threat to our guests,
            including the following:
          </p>
          <div>
            <ol>
              <li>Pointed or sharp objects</li>
              <li>Firearms and Ammunition</li>
              <li>Explosives or flammable substances</li>
              <li>
                Toys representing dangerous objects such as toy guns and knives
              </li>
              <li>Aerosols</li>
              <li>
                Any other items which may be considered security hazards by law
              </li>
            </ol>
          </div>
        </div>
      </div>
      <button onClick={downloadPDF} className={styles.btn}>
        Download PDF
      </button>
    </>
  );
}

export default MyFlight;
