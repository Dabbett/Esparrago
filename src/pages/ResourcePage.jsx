import styles from "../App.module.css";
import { Navbar2 } from "../components/Navbar2/Navbar2";
import { Resources } from "../components/Resources/Resources";

export function ResourcePage() {
  return (
    <div className={styles.App}>
      <Navbar2 />

      <Resources />
    </div>
  );
}
