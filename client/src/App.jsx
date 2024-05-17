import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <footer>
          <p>&copy; Blake Reidinger 2024</p>
        </footer>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
