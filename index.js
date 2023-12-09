const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
require("./src/config/db");
const bookRoutes = require("./src/routes/book.routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/book", bookRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
