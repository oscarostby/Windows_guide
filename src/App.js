import React from 'react';
import { BrowserRouter, Route, Routes, Route as R } from 'react-router-dom'; // Import the new components
import Home from './main'; // Assuming this is where your main content resides
import Tut from "./tutorial";
import Quiz from "./quiz";
function App() {
  return (
    <BrowserRouter>
      <Routes> {/* Use Routes instead of Switch */}
        <R path="/" element={<Home />} /> {/* Use Route with 'element' prop */}
        <R path="/tutorial" element={<Tut />} /> {/* Use Route with 'element' prop */}
        <R path="/quiz" element={<Quiz />} /> {/* Use Route with 'element' prop */}
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;