
import styles from "../App.module.css";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import { About } from "../components/About/About";
import { Specialties } from "../components/Specialties/Specialties";
import { Adult } from "../components/Adult/Adult";
import { Pediatric } from "../components/Pediatric/Pediatric";
import { Footer } from "../components/Footer/Footer";

export function Home() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Adult />
      <Pediatric />
      <Footer />
    </div>
  );
}
