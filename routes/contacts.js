const express = require('express');
const contactRoutes = express.Router();

const {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact,
} = require( "../controllers/contacts.js" );

contactRoutes.get("/", getAll);

contactRoutes.get("/:id", getSingle);

contactRoutes.post("/", createContact);

contactRoutes.put("/:id", updateContact);

contactRoutes.delete("/:id", deleteContact);

module.exports = contactRoutes;
