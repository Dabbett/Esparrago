import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.title}>
        Heidi Esparrago Zeppelin <em className={styles.licenses}>LCSW, LCAS</em>
      </Link>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/EMDRIPage">EMDR INTENSIVES</Link>
          </li>
          <li>
            <Link to="/ResourcePage">RESOURCES</Link>
          </li>
          <li>
            <Link to="/FAQpage">FAQ</Link>
          </li>
          <li>
            <Link to="/ContactPage">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
