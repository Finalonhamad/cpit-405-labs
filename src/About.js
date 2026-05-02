import React from "react";

export default function About() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "40px 20px",
        minHeight: "calc(100vh - 42px)",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "8px",
          padding: "40px",
          width: "100%",
          maxWidth: "580px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2 style={{ marginTop: 0 }}>About Us</h2>
        <p style={{ lineHeight: "1.7", color: "#444" }}>
          <strong>Link Shrinker</strong> is a simple URL shortening application
          built with React as part of Lab 8.
        </p>
        <p style={{ lineHeight: "1.7", color: "#444" }}>
          This app demonstrates core React fundamentals:
        </p>
        <ul style={{ lineHeight: "2.2", color: "#444" }}>
          <li>
            State management with <code>useState</code>
          </li>
          <li>Event handling for user interactions</li>
          <li>Page navigation using React Router</li>
          <li>Custom short URL generation</li>
        </ul>
        <p style={{ lineHeight: "1.7", color: "#444" }}>
          Go to the Home page, enter any long URL and a custom short code to get
          your shortened link!
        </p>
      </div>
    </div>
  );
}
