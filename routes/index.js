const express = require('express')
const contactRoutes = require('./contacts');
const apiDocs = require("./apiDocs");
const { awesomeFunction } = require("../controllers/index.js");

const router = express.Router();

router.use("/contacts", contactRoutes);
// router.get("/", awesomeFunction);
router.use("/api-docs", apiDocs);

module.exports = router;
