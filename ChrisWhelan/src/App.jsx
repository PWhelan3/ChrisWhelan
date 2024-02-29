import styles from "./App.module.css";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Work } from "./components/Work/Work";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Work />
      <Contact />
    </div>
  );
}

export default App;