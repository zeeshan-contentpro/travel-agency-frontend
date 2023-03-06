"use client";
import styles from "./header.module.css";
import { useState } from "react";
import visaCentre from "../../public/assets/visa_centre.json";

export default function Header() {
  const [selected, setSelected] = useState();
  const [show, setShow] = useState(true);

  const selectedCountry = (e) => {
    setSelected(visaCentre[e.target.selectedIndex - 1]);
    setShow(false);
  };

  const shootMe = () => {
    setShow(true);
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
          <button onClick={shootMe}>See visa info</button>
        </div>
      </div>
      {selected && show && (
        <div className={styles.list}>
          <ul>
            <li>
              <b>Country:</b> {selected?.country}
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
              <b>File Processing Time:</b> {selected?.file_processing_time}
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
      )}
    </div>
  );
}
