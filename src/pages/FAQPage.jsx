import styles from "../App.module.css";
import { Navbar2 } from "../components/Navbar2/Navbar2";
import { FAQ } from "../components/FAQ/FAQ";

export function FAQPage() {
  return (
    <div className={styles.App}>
      <Navbar2 />
      <hr />
      <FAQ />
    </div>
  );
}
