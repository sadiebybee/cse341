const { response } = require("express");
const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb
    .getDb()
    .db("contacts")
    .collection("contacts")
    .find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db("contacts")
    .collection("contacts")
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });
};

const createContact = async (req, res, next) => {
  //   //we are creating a contact here
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const result = await mongodb
    .getDb()
    .db("contacts")
    .collection("contacts")
    .insertOne(contact);
  if (result.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json({ message: "Failed to create contact." });
  }
};

const updateContact = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const result = await mongodb
    .getDb()
    .db("contacts")
    .collection("contacts")
    .replaceOne({ _id: userId }, contact);
  if (result.modifiedCount > 0) {
    res.status(204).json(response);
  } else {
    res.status(500).json({ message: "Failed to update contact." });
  }
};

const deleteContact = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db("contacts")
      .collection("contacts")
      .deleteOne({ _id: userId });

    if (result.deletedCount > 0) {
      res.status(200).json(response);
    }
    else {
      res.status(500).json({message: "Failed to delete contact."});
    }

};

module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact,
};

// add to module.exports createContact
