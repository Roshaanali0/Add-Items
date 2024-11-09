const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
    tlsInsecure: true,
  })
  .then(() => {
    console.log("Database connected successfully!");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("Database connection failed: ", error);
  });
