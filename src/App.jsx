import { Hero } from "./components/Hero/Hero";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { Specialties } from "./components/specialties/specialties";
import { Adult } from "./components/Adult/Adult";
import { Pediatric } from "./components/Pediatric/Pediatric";
import { Footer } from "./components/Footer/Footer"


function App() {
  return <div className={styles.App}>
    <Navbar />
    <Hero />
    <About /> 
    <Specialties />
    <Adult />
    <Pediatric />

    <Footer />
  </div>
}


export default App;
