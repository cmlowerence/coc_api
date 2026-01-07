require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const apiRoutes = require("./src/routes/apiRoutes");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// Security: Rate Limiting
// Limit each IP to 100 requests per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: { error: "Too many requests, please try again later." }
});
app.use(limiter);

// Mount the generic routes
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

