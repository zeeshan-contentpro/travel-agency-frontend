"use client";
import styles from "./header.module.css";
// import { useEffect, useState } from "react";
import visaCentre from "../../public/assets/visa_centre.json";

export default function Header() {
  const shootMe = () => {
    console.log("Hello");
  };

  //   const [select, setSelect] = useState([]);

  const data = visaCentre.map((result) => (
    <div key={result.id} className={styles.list}>
      <ul>
        <li>
          <b>Country:</b> {result.country}
        </li>
        <li>
          <b>Embassy Phone:</b> {result.embassy_phone}
        </li>
        <li>
          <b>Embassy Email:</b> {result.embassy_email}
        </li>
        <li>
          <b>Embassy Address:</b> {result.embassy_address}
        </li>
        <li>
          <b>Visa Fee:</b> {result.visa_fee}
        </li>
        <li>
          <b>File Processing Fee:</b> {result.file_processing_fee}
        </li>
        <li>
          <b>File Processing Time:</b> {result.file_processing_time}
        </li>
        <li>
          <b>Visa Fee at Embassy:</b> {result.visa_fee_at_embassy}
        </li>
        <li>
          <b>Vfs Service Charge for Biometrics: </b>
          {result.vfs_service_charge_for_biometrics}
        </li>
        <li>
          <b>Bank Draft Charge:</b> {result.bank_draft_charge}
        </li>
        <li>
          <b>Medical:</b> {result.medical}
        </li>
        <li>
          <b>Processing Time in Embassy after Submission: </b>
          {result.processing_time_in_embassy_after_submission}
        </li>
        <li>
          <b>Tourist or Business Visa Requirements: </b>
          {result.tourist_or_business_visa_requirements}
        </li>
      </ul>
    </div>
  ));

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Where do you want to go?</h1>
      <div className={styles.dropdown}>
        <select defaultValue={"DEFAULT"}>
          <option value="DEFAULT" disabled>
            Select Country
          </option>
          {visaCentre.map((result) => (
            <option key={result.id}>{result.country}</option>
          ))}
        </select>
        <button onClick={shootMe}>See visa info</button>
      </div>
      <div>{data}</div>
    </div>
  );
}
