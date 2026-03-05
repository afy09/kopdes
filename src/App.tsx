import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import halaman
import LandingPageUdin from "./LandingPageUdin/Pages";
import PageUtama from "./LandingPageUdin/Pages/utama/pageUtama";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PageUtama />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
