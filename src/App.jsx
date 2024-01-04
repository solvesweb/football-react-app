import React from "react";

import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LeagueDetails } from "./pages/LeagueDetails";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<LeagueDetails />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
