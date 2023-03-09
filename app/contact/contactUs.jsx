import React from "react";
import styles from "./contactUs.module.css";
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.7864561054948!2d90.41070558814312!3d23.77782102629747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf54a6e4f4c3%3A0x9eae8ae75e0acce1!2sContentPro%20Interactive%20Limited!5e0!3m2!1sen!2sbd!4v1678356341007!5m2!1sen!2sbd"
        width="100%"
        height="350"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className={styles.contactDetails}>
        <div className={styles.contactDetailsLeft}>
          <h2>Contact us</h2>
          <div className={styles.contactDetailsLeftInner}>
            <AiOutlineHome className={styles.icon} />
            <div>
              <h3>Dhaka Office</h3>
              <p>House: 1, Road: 23/A, Gulshan-1, Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className={styles.contactDetailsLeftInner}>
            <AiOutlineHome className={styles.icon} />
            <div>
              <h3>Chittagong Office</h3>
              <p>4th Floor, Central Plaza, GEC Circle, Chittagong - 4226</p>
            </div>
          </div>
          <div className={styles.contactDetailsLeftInner}>
            <AiOutlinePhone className={styles.icon} />
            <div>
              <h3>Phone</h3>
              <p>Dhaka: +880 17 8111 6699 Chittagong: +880 17 1124 4169</p>
            </div>
          </div>
          <div className={styles.contactDetailsLeftInner}>
            <AiOutlineMail className={styles.icon1} />
            <div>
              <h3>Email</h3>
              <p>info@travelbuddy.com</p>
            </div>
          </div>
        </div>
        <div className={styles.contactDetailsRight}>
          <h2>Send us a Message</h2>
          <div className={styles.inputForm}>
            <div className={styles.inputFormInner}>
              <div>
                <label className={styles.inputLabel}>Your Name</label>
                <input type="text" name="" />
              </div>
              <div>
                <label className={styles.inputLabel}>Your Phone Number</label>
                <input type="text" name="" />
              </div>
            </div>
            <label className={styles.inputLabel}>Your Message</label>
            <textarea
              placeholder="Write message here"
              name=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className={styles.messageButton}>Send Message</button>
        </div>
      </div>
    </div>
  );
}
