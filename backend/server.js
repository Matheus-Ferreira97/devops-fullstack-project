require("dotenv").config();

const cors = require("cors");

const express = require("express");

const healthRoutes = require("./routes/health");

const app = express();

app.use(cors());

const PORT = process.env.PORT;

app.use("/health", healthRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "DevOps Full Stack API running successfully 🚀",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
