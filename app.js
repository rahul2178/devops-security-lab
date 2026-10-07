const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>DevOps Security Lab</h1>
        <p>Application running successfully.</p>
        <a href="/search?q=hello">Search Demo</a>
    `);
});

// INTENTIONALLY VULNERABLE DEMO ENDPOINT
app.get("/search", (req, res) => {
    const query = req.query.q || "";
    res.send(`
        <h2>Search Results</h2>
        <p>You searched for: ${query}</p>
    `);
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Application running on port 3000");
});