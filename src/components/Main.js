// Package imports
import { Routes, Route } from "react-router-dom";

// Component imports
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import About from "./About";

// Asset imports

// CSS imports
import "./Main.css";

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking-page" element={<BookingPage />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
}
