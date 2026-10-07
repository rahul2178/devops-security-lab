const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>DevOps Security Lab</h1>
        <p>Application running successfully.</p>
    `);
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Application running on port 3000");
});