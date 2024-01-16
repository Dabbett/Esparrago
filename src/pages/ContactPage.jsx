import styles from "../App.module.css";
import { Navbar2 } from "../components/Navbar2/Navbar2";
import { Contact } from "../components/Contact/Contact";

export function ContactPage() {
  return (
    <div className={styles.App}>
      <Navbar2 />
      
      <Contact />
    </div>
  );
}
