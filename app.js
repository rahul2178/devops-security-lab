const express = require("express");

const app = express();

// Security headers
app.disable("x-powered-by");

app.use((req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader(
        "Content-Security-Policy",
        "default-src 'self'; style-src 'self' 'unsafe-inline'"
    );
    next();
});

app.get("/", (req, res) => {
    res.send(`
        <h1>DevOps Security Lab</h1>
        <p>Application running successfully.</p>
        <a href="/search?q=hello">Search Demo</a>
    `);
});

// Secure search endpoint
app.get("/search", (req, res) => {
    const query = String(req.query.q || "");

    // Escape HTML characters to prevent reflected XSS
    const safeQuery = query
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

    res.send(`
        <h2>Search Results</h2>
        <p>You searched for: ${safeQuery}</p>
    `);
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Application running on port 3000");
});