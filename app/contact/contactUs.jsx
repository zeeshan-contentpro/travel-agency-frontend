import React from "react";
import styles from "./contactUs.module.css";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <div>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7302.444625407029!2d90.40591297795257!3d23.775096588308745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7711041fe49%3A0x6724a7f9669fcc9e!2sNiketan%20Housing%20Project%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1676200227368!5m2!1sen!2sbd"
          width="600"
          height="400"
          className={styles.mapContainer}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className={styles.contactDetails}>
        <div className={styles.contactDetailsInnerLeft}>
          <h3 className={styles.contactTitle}>Contact</h3>
          <form action="" className={styles.contactForm}>
            <div>
              <input
                type="text"
                className={styles.formControl}
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="email"
                className={styles.formControl}
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="tel"
                className={styles.formControl}
                placeholder="Mobile Number"
              />
            </div>
            <div>
              <textarea
                name=""
                id=""
                className={styles.formControl}
                cols="30"
                rows="5"
                placeholder="Comments"
                style={{ fontFamily: "Roboto" }}
              ></textarea>
            </div>
            <div>
              <button className={styles.button}>Submit</button>
            </div>
          </form>
        </div>
        <div className={styles.contactDetailsInnerRight}>
          <h3 className={styles.contactTitle}>Get in touch with us</h3>
          <div>
            <ul>
              <li>
                <AiOutlineHome className={styles.icon} />
                <address>
                  <b>Dhaka Office:</b> House: 1, Road: 23/A, Gulshan-1, Dhaka -
                  1212
                </address>
              </li>
              <li>
                <AiOutlineHome className={styles.icon} />
                <address>
                  <b>Chittagong Office:</b> 4th Floor, Central Plaza, GEC
                  Circle, Chittagong - 4226
                </address>
              </li>
              <li>
                <BiPhoneCall className={styles.icon} />
                <b>Dhaka:</b>{" "}
                <a href="tel:+88017811166990">+880 17 8111 6699</a>
              </li>
              <li>
                <BiPhoneCall className={styles.icon} />
                <b>Chittagong:</b>{" "}
                <a href="tel:+88017112441690">+880 17 1124 4169</a>
              </li>
              <li>
                <AiOutlineMail className={styles.icon} />
                <a href="mailto:info@travelbuddy.com">info@travelbuddy.com</a>
              </li>
              <li>
                <BiInfoCircle className={styles.icon} />
                <p>Sunday – Thursday 10 AM – 6 PM</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
