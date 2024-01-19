import styles from "../App.module.css";
import { Navbar2 } from "../components/Navbar2/Navbar2";
import { EMDRI } from "../components/EMDRI/EMDRI";

export function EMDRIPage() {
  return (
    <div className={styles.App}>
      <Navbar2 />
      <hr />
      <EMDRI />
    </div>
  );
}
