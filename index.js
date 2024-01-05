const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT;

const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", require('./Router/UserRoute/UserRoute'));
app.use("/api/staff", require("./Router/StaffRoute/StaffRoute"));
app.use("/api/admin", require("./Router/AdminRoute/AdminRoute"));

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `GYM Server is running at PORT ${PORT}`
  );
});
