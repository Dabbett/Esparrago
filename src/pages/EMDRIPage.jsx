import styles from "../App.module.css";
import { Navbar2 } from "../components/Navbar2/Navbar2";
import { EMDRI } from "../components/EMDRI/EMDRI";
import { Link } from "react-router-dom";


export function EMDRIPage() {
  return (
    <div className={styles.App}>
      <Navbar2 />
      <hr />
      <EMDRI />
    </div>
  );
}
