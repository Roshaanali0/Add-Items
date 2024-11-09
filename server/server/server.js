const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev")); // Logging HTTP requests

app.get("/", (req, res) => {
  console.log("The express server is up and running.");
  res.send("The express server is up and running.");
});

// Routes definition
const auth = require("./routes/itemRoute");
app.use("/api", auth);

// MongoDB connection
mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true, // Enabling TLS
    tlsInsecure: true, // Use this option with caution, better to resolve certificate issues properly
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`The server is running on port ${port}`);
      console.log("The database has been connected successfully!");
    });
  })
  .catch((error) => {
    console.error("Database connection failed: ", error);
  });
