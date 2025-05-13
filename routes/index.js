// const router = require('express').Router();
import { Router } from "express";
import { contactRoutes } from "./contacts.js";
// const contactRoutes = require('./contacts');

const router = Router();

// const myController = require('../controllers');

import { awesomeFunction } from "../controllers/index.js";

router.use("/contacts", contactRoutes);
router.get("/", awesomeFunction);

// module.exports = router;

export {router};
