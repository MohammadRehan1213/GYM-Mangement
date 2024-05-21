const express = require("express");
const multer = require('multer'); // For handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const {
    loginAdmin
} = require("../Controller/loginCtrl");
const router = express.Router();

router.post("/login", loginAdmin);

module.exports = router;
