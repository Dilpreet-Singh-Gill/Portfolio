import { useState } from "react";
import Loader from "../components/Loader.jsx";
import FallingBalls from "../components/FallingBalls.jsx";
import Hero from "../components/Hero.jsx";
import Contact from "../components/Contact.jsx";
import Resume from "../components/Resume.jsx";
import Navigation from "../components/Navigation.jsx";
import About from "../components/About.jsx";
import Work from "../components/Work.jsx";
import Skills from "../components/Skills.jsx";
import Footer from "../components/Footer.jsx";

export default function MainPage() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return <Loader onFinish={() => setLoaded(true)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <FallingBalls />
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
