"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import DestinationCard from "./destinationCard";
import { BsFilter } from "react-icons/bs";
import HolidayCard from "../holidayCard";
import { package_data } from "@/data";

export default function HolidayCardItem({ params }) {
  const [data, setData] = useState(package_data);

  return (
    <main className={styles.main}>
      <header>
        <h1 className={styles.title}>Make Your Holiday Special</h1>
      </header>

      <div className={styles.container}>
        <div>
          <h1 className={styles.subtitle}>Explore Maldives</h1>
          <article className={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
            ipsam nobis distinctio ad nisi, totam itaque suscipit rem, neque
            veritatis quas qui officia numquam ex enim est? Officia,
            accusantium. Doloribus!
          </article>
        </div>
        <div className={styles.containerMain}>
          <div className={styles.left}>
            <div className={styles.filterHeader}>
              <BsFilter />
              <h2>Filter</h2>
            </div>

            <div className={styles.leftFilterItems}>
              <h3>Property Rating</h3>
              <hr />
              <div className={styles.inputButtons}>
                <div className={styles.inputButton}>
                  <input type="checkbox" id="cb1" />
                  <label for="cb1">Checkbox 1</label>
                </div>
                <div className={styles.inputButton}>
                  <input type="checkbox" id="cb2" />
                  <label for="cb2">Checkbox 2</label>
                </div>
                <div className={styles.inputButton}>
                  <input type="checkbox" id="cb3" />
                  <label for="cb3">Checkbox 3</label>
                </div>
                <div className={styles.inputButton}>
                  <input type="checkbox" id="cb4" />
                  <label for="cb4">Checkbox 4</label>
                </div>
              </div>
            </div>
            <div className={styles.leftFilterItems}>
              <h3>Meal</h3>
              <hr />
              <div className={styles.inputButtons}>
                <div className={styles.inputButton}>
                  <input type="checkbox" id="cb5" />
                  <label for="cb5">Checkbox 1</label>
                </div>
                <div className={styles.inputButton}>
                  <input type="checkbox" id="cb6" />
                  <label for="cb6">Checkbox 2</label>
                </div>
                <div className={styles.inputButton}>
                  <input type="checkbox" id="cb7" />
                  <label for="cb7">Checkbox 3</label>
                </div>
                <div className={styles.inputButton}>
                  <input type="checkbox" id="cb8" />
                  <label for="cb8">Checkbox 4</label>
                </div>
              </div>
            </div>
            <div className={styles.leftFilterItems}>
              <h3>Property Type</h3>
              <hr />
              <div className={styles.inputButtons}>
                <div className={styles.inputButton}>
                  <input type="checkbox" id="cb9" />
                  <label for="cb9">Checkbox 1</label>
                </div>
                <div className={styles.inputButton}>
                  <input type="checkbox" id="cb10" />
                  <label for="cb10">Checkbox 2</label>
                </div>
                <div className={styles.inputButton}>
                  <input type="checkbox" id="cb11" />
                  <label for="cb11">Checkbox 3</label>
                </div>
                <div className={styles.inputButton}>
                  <input type="checkbox" id="cb12" />
                  <label for="cb12">Checkbox 4</label>
                </div>
              </div>
            </div>
            <div className={styles.leftFilterItems}>
              <h3>Facilities & Amenities</h3>
              <hr />
              <div className={styles.inputButtons}>
                <div className={styles.inputButton}>
                  <input type="checkbox" id="cb13" />
                  <label for="cb13">Checkbox 1</label>
                </div>
                <div className={styles.inputButton}>
                  <input type="checkbox" id="cb14" />
                  <label for="cb14">Checkbox 2</label>
                </div>
                <div className={styles.inputButton}>
                  <input type="checkbox" id="cb15" />
                  <label for="cb15">Checkbox 3</label>
                </div>
                <div className={styles.inputButton}>
                  <input type="checkbox" id="cb16" />
                  <label for="cb16">Checkbox 4</label>
                </div>
              </div>
            </div>
            <div className={styles.leftFilterItems}>
              <h3>Point Of Interest</h3>
              <hr />
              <div className={styles.inputButtons}>
                <div className={styles.inputButton}>
                  <input type="checkbox" id="cb17" />
                  <label for="cb17">Checkbox 1</label>
                </div>
                <div className={styles.inputButton}>
                  <input type="checkbox" id="cb18" />
                  <label for="cb18">Checkbox 2</label>
                </div>
                <div className={styles.inputButton}>
                  <input type="checkbox" id="cb19" />
                  <label for="cb19">Checkbox 3</label>
                </div>
                <div className={styles.inputButton}>
                  <input type="checkbox" id="cb20" />
                  <label for="cb20">Checkbox 4</label>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.middle}>
            <h2>Packages in Jakarta</h2>
            {data.map((data) => (
              <DestinationCard
                key={data.id}
                hotel_name={data.hotel_name}
                location={data.location}
                price_day={data.price_day}
                rating={data.rating}
              />
            ))}

            {/* <DestinationCard />
            <DestinationCard />
            <DestinationCard />
            <DestinationCard /> */}
          </div>
          <div className={styles.right}>
            <h3>Explore more in Indonesia</h3>
            <div className={styles.cardContainer}>
              <HolidayCard
                imageUrl={
                  "https://images.unsplash.com/photo-1557093793-d149a38a1be8?q=80&w=1974&auto=format&fit=crop&w=1035&q=80"
                }
                title="Ubud"
                name="10 Hotels Available"
              />
              <HolidayCard
                imageUrl={
                  "https://images.unsplash.com/photo-1621071437499-a6cbed2219d9?q=80&w=1935&auto=format&fit=crop&w=1035&q=80"
                }
                title="Malang"
                name="3 Hotels Available"
              />
              <HolidayCard
                imageUrl={
                  "https://images.unsplash.com/photo-1523539693385-e5e891eb4465?q=80&w=1978&auto=format&fit=crop&w=1035&q=80"
                }
                title="Kuta"
                name="12 Hotels Available"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
