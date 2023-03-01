"use client";
import { useState } from "react";
import styles from "./nav.module.css";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

function Menu() {
    return (
        <div className={styles.menu}>
    
        </div>
    );
}

export default function Nav() {
    const [viewMenu, setViewMenu] = useState(false);
    return (
        <div className={styles.main} style={viewMenu ? {backgroundColor: "rgba(0, 0, 0, 0.6)"} : null}>
            <img className={styles.logo} src="./logo.svg" alt="logo" />
            {!viewMenu ? (
                <BiMenu
                    className={styles.icon}
                    onClick={() => setViewMenu(true)}
                />
            ) : (
                <IoClose
                    className={styles.icon}
                    onClick={() => setViewMenu(false)}
                />
            )}
            {viewMenu && <Menu />}
        </div>
    );
}
