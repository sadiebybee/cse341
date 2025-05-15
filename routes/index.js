const express = require('express')
const contactRoutes = require('./contacts');
const { awesomeFunction } = require("../controllers/index.js");

const router = express.Router();

router.use("/contacts", contactRoutes);
router.get("/", awesomeFunction);

module.exports = router;
