import styles from "./header.module.css";
// import { useEffect, useState } from "react";
import visaCentre from "../../public/assets/visa_centre.json";

export default function Header() {
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
                <button>See visa info</button>
            </div>
        </div>
    );
}
