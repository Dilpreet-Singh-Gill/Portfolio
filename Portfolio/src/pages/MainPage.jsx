import { useState } from "react";
import Loader from "../components/Loader";
import FallingBalls from "../components/FallingBalls";
import Home from "../components/Home.jsx";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Responsibilities from "../components/Responsibilities";
import Connect from "../components/Connect";

export default function MainPage() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) return <Loader onFinish={() => setLoaded(true)} />;

  return (
    <>
      <FallingBalls />
      <Home />
      <Experience />
      <Projects />
      <Achievements />
      <Responsibilities />
      <Connect />
    </>
  );
}
