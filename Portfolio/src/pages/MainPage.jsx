import { useState } from "react";
import Loader from "../components/Loader.jsx";
import FallingBalls from "../components/FallingBalls.jsx";
import Home from "../components/Home.jsx";
import Experience from "../components/Experience.jsx";
import Projects from "../components/Projects.jsx";
import Achievements from "../components/Achievements.jsx";
import Responsibilities from "../components/Responsibilities.jsx";
import Connect from "../components/Connect.jsx";

export default function MainPage() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return <Loader onFinish={() => setLoaded(true)} />;
  }

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
