const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Define collection and schema for ServerPort

const ServerPort = new Schema(
  {
    firstname: {
      type: String,
    },

    gender: {
      type: String,
    },

    dob: {
      type: Date,
    },

    phone: {
      type: Number,
    },
  },
  {
    collection: "servers",
  }
);

module.exports = mongoose.model("ServerPort", ServerPort);
