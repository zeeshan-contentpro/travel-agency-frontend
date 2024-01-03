"use client";
import styles from "./visaInfo.module.css";
import { useState } from "react";
import visaCentre from "../../public/assets/visa_centre.json";
import PackageCard from "../(Home)/packageCard";

export default function VisaInfo() {
  let indexOfSelectedCountry;
  const [selected, setSelected] = useState();

  const selectedCountry = (e) => {
    indexOfSelectedCountry = visaCentre[e.target.selectedIndex - 1];
  };

  const viewVisaInfoHandler = () => {
    setSelected(indexOfSelectedCountry);
  };

  return (
    <div>
      <div className={styles.main}>
        <h1 className={styles.title}>Where do you want to go?</h1>
        <div className={styles.dropdown}>
          <select defaultValue={"DEFAULT"} onChange={selectedCountry}>
            <option value="DEFAULT" disabled>
              Select Country
            </option>
            {visaCentre.map((data) => (
              <option key={data.id}>{data.country}</option>
            ))}
          </select>
          <button onClick={viewVisaInfoHandler}>See Visa Info</button>
        </div>
      </div>
      <div className={styles.container}>
        <h1 style={{ textAlign: "center" }}>Visa Information</h1>
        <br />
        <p className={styles.info}>
          Visa center powered by cTravel buddy is here to help you get your
          visas through a hassle-free process. We work only to ease the
          difficulties that every traveler in Bangladesh go through to get
          his/her visa. For the very first time in Bangladesh we are providing
          &apos;pick n drop visa service&apos;. All you need to do is collect
          the required documents and submit those to us with required fee. We
          will take the burden to submit your passport in the embassy.
        </p>
        <br />
        {selected && (
          <div className={styles.visaDetails}>
            <div className={styles.visaDetailsLeft}>
              <div className={styles.list}>
                <ul>
                  <li>
                    <h2>Country: {selected?.country} </h2>
                  </li>
                  <li>
                    <b>Embassy Phone:</b> {selected?.embassy_phone}
                  </li>
                  <li>
                    <b>Embassy Email:</b> {selected?.embassy_email}
                  </li>
                  <li>
                    <b>Embassy Address:</b> {selected?.embassy_address}
                  </li>
                  <li>
                    <b>Visa Fee:</b> {selected?.visa_fee}
                  </li>
                  <li>
                    <b>File Processing Fee:</b> {selected?.file_processing_fee}
                  </li>
                  <li>
                    <b>File Processing Time:</b>{" "}
                    {selected?.file_processing_time}
                  </li>
                  <li>
                    <b>Visa Fee at Embassy:</b> {selected?.visa_fee_at_embassy}
                  </li>
                  <li>
                    <b>VFS Service Charge for Biometrics: </b>
                    {selected?.vfs_service_charge_for_biometrics}
                  </li>
                  <li>
                    <b>Bank Draft Charge:</b> {selected?.bank_draft_charge}
                  </li>
                  <li>
                    <b>Medical:</b> {selected?.medical}
                  </li>
                  <li>
                    <b>Processing Time in Embassy after Submission: </b>
                    {selected?.processing_time_in_embassy_after_submission}
                  </li>
                  <li>
                    <b>Tourist or Business Visa Requirements: </b>
                    {selected?.tourist_or_business_visa_requirements}
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.visaDetailsRight}>
              {/* <div className={styles.visaDetailsRightTop}>
                <PackageCard
                  imageUrl={
                    "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                  }
                  name="Bali, Indonesia"
                  duration="3 days and 4 nights"
                />
              </div> */}
              <div className={styles.visaDetailsRightBottom}>
                <h4>Need Travel buddy Help?</h4>
                <p>
                  We would be more than happy to help you. Our team advisor are
                  24/7 at your service to help you.
                </p>
                <h4>+880 17 8111 6699</h4>
                <p>info@travelbuddy.com</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
