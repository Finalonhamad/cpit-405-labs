import React from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function Navbar() {
  const location = useLocation();

  const linkStyle = (path) => ({
    padding: "10px 22px",
    color: "white",
    textDecoration: "none",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    background: location.pathname === path ? "#8a6060" : "transparent",
    display: "inline-block",
  });

  return (
    <nav style={{ background: "#6b4a4a", display: "flex" }}>
      <Link to="/" style={linkStyle("/")}>Home</Link>
      <Link to="/about" style={linkStyle("/about")}>About us</Link>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", background: "#e8e8e8", fontFamily: "Arial, sans-serif" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
