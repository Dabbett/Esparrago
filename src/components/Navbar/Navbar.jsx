import React, {useState} from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    return (
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">
          Heidi Esparrago Zeppelin{" "}
          <em className={styles.licenses}>LCSW,LCAS</em>
        </a>
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
              <a href="/#About" onClick={() => scrollToSection("#About")}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="/#Adult" onClick={() => scrollToSection("#Adult")}>
                ADULTS
              </a>
            </li>
            <li>
              <a href="/#Child" onClick={() => scrollToSection("#Child")}>
                KIDS
              </a>
            </li>
            <li>
              <a href="/EMDRIPage">EMDR INTENSIVES</a>
            </li>
            <li>
              <a href="/ResourcePage">RESOURCES</a>
            </li>
            <li>
              <a href="/FAQpage">FAQ</a>
            </li>
            <li>
              <a href="/ContactPage">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    );
};
