/** @format */

const express = require("express");
const client = require("prom-client");

const app = express();

// Collect default system metrics (CPU, Memory, etc.)
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ register: client.register });

// Custom route for testing
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Metrics endpoint for Prometheus
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
