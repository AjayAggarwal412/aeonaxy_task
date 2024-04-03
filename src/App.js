import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import IntroPage from "./components/IntroPage"; // Import the Success component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/intro" element={<IntroPage />} />
      </Routes>
    </Router>
  );
}

export default App;
