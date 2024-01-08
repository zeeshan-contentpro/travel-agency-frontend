"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
// import HotelInfo from "./hotelInfo";
// import FlightInfo from "./flightInfo";
import BookedHotel from "./bookedHotel";
import BookedFlight from "./bookedFlight";

const Dashboard = () => {
  const { data: session } = useSession();
  const [hotelData, setHotelData] = useState(null);
  const [flightData, setFlightData] = useState(null);
  const [showHotelData, setShowHotelData] = useState(false);
  const [showFlightData, setShowFlightData] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    // Retrieve data from localStorage
    const dataFromLocalStorage = localStorage.getItem("hotelInfo");
    if (dataFromLocalStorage) {
      const parsedData = JSON.parse(dataFromLocalStorage);
      setHotelData(parsedData);
    }
    const dataFromLocalStorage2 = localStorage.getItem("flightBookingStatus");
    if (dataFromLocalStorage2) {
      const parsedData = JSON.parse(dataFromLocalStorage2);
      setFlightData(parsedData);
    }
  }, []);

  const handleButtonClick = (type) => {
    setActiveButton(type);
    if (type === "package") {
      setShowHotelData(true);
      setShowFlightData(false);
    } else if (type === "flight") {
      setShowFlightData(true);
      setShowHotelData(false);
    }
  };

  return (
    <div className={styles.main}>
      <h1>Dashboard</h1>
      <hr />
      <div className={styles.profile}>
        <div>
          <Image
            src={session?.user.image || "/logo.svg"}
            alt=""
            height={80}
            width={80}
            className={styles.profileImage}
          />
        </div>
        <div>
          <h3>Welcome {session?.user?.name}</h3>
          <p>{session?.user?.email}</p>
          {/* <p>{session?.user?.phone}</p> */}
        </div>
      </div>

      <div className={styles.btnGroup}>
        <button
          onClick={() => handleButtonClick("package")}
          className={activeButton === "package" ? styles.activeButton : ""}
        >
          Package
        </button>
        <button
          onClick={() => handleButtonClick("flight")}
          className={activeButton === "flight" ? styles.activeButton : ""}
        >
          Flight
        </button>
      </div>

      <div className={styles.bookedContainer}>
        {showHotelData ? (
          hotelData ? (
            <BookedHotel hotelData={hotelData} />
          ) : (
            <p>No Package booked yet.</p>
          )
        ) : null}
      </div>

      <div className={styles.bookedContainer}>
        {showFlightData ? (
          flightData ? (
            <BookedFlight flight={flightData} />
          ) : (
            <p>No Flight booked yet.</p>
          )
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
