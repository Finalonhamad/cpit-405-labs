import React, { useState } from "react";

export default function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [shortCode, setShortCode] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleShorten = () => {
    setError("");
    setShortUrl("");

    if (!longUrl) {
      setError("Please enter a long URL.");
      return;
    }
    try {
      new URL(longUrl);
    } catch {
      setError("Please enter a valid URL (must start with https://).");
      return;
    }
    if (!shortCode) {
      setError("Please enter a short code.");
      return;
    }
    if (!/^[a-zA-Z0-9_-]+$/.test(shortCode)) {
      setError("Short code can only contain letters, numbers, - and _");
      return;
    }

    setShortUrl("https://cpt405.co/" + shortCode);
  };

  const inputStyle = {
    width: "100%",
    padding: "8px 10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
    boxSizing: "border-box",
    marginBottom: "16px",
  };

  const labelStyle = {
    display: "block",
    fontWeight: "bold",
    fontSize: "14px",
    marginBottom: "6px",
  };

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
        }}
      >
        <h2 style={{ textAlign: "center", marginTop: 0, marginBottom: "28px" }}>
          Link Shrinker
        </h2>

        <label style={labelStyle}>Long URL:</label>
        <input
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="https://react.dev/learn/reusing-logic-with-custom-hooks"
          style={inputStyle}
        />

        <label style={labelStyle}>Enter short code:</label>
        <input
          type="text"
          value={shortCode}
          onChange={(e) => setShortCode(e.target.value)}
          placeholder="react101"
          style={inputStyle}
        />

        {error && (
          <p style={{ color: "red", fontSize: "13px", marginTop: "-8px", marginBottom: "12px" }}>
            {error}
          </p>
        )}

        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <button
            onClick={handleShorten}
            style={{
              background: "#4a90d9",
              color: "white",
              border: "none",
              padding: "9px 30px",
              borderRadius: "4px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Shorten
          </button>
        </div>

        {shortUrl && (
          <div>
            <p style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "8px" }}>
              Short URL
            </p>
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "12px",
                textAlign: "center",
                background: "#fafafa",
              }}
            >
              <span style={{ color: "#4a90d9", fontSize: "14px" }}>{shortUrl}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
