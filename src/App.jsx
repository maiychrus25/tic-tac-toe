import "./App.css";
import Snowfall from "react-snowfall";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Toggle from "./components/Toggle";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={`App shadow-md p-4 ${isDarkMode ? "bg-black" : "bg-white"}`}
    >
      <Game isDarkMode={isDarkMode} />
      <Snowfall />
      <Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Footer />
    </div>
  );
}

export default App;
