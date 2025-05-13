// const express = require('express');
// const router = express.Router();
import { Router } from "express";
// import router from '.';
var contactRoutes = Router();

// const contactsController = require('../controllers/contacts');
import {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact,
} from "../controllers/contacts.js";

contactRoutes.get("/", getAll);

contactRoutes.get("/:id", getSingle);

contactRoutes.post("/", createContact);

contactRoutes.put("/:id", updateContact);

contactRoutes.delete("/:id", deleteContact);

// module.exports = router;

export { contactRoutes };
