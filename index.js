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

const allowedOrigins = ['http://localhost:4200', 'https://gym-link.netlify.app'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/login", require('./Router/loginRouter'));
app.use("/api/user", require('./Router/UserRoute/UserRoute'));
app.use("/api/staff", require("./Router/StaffRoute/StaffRoute"));
app.use("/api/admin", require("./Router/AdminRoute/AdminRoute"));
app.use("/api/workout", require("./Router/WorkOutRoute/WorkOutRoute"));
app.use("/api/paymentinvoice", require("./Router/PaymentInvoiceRoute/PaymentInvoiceRoute"));
app.use("/api/addmembership", require("./Router/MembershipRoute/MembershipRoute"));
app.use("/api/addproduct", require("./Router/AddProductRoute/AddProductRoute"));
app.use("/api/addsellproduct", require("./Router/AddSellProductRoute/AddSellProductRoute"));

app.get("/get", (req, res) => {
  res.json("welocome")
})
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `GYM Server is running at PORT ${PORT}`
  );
});
