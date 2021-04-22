const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Profile = Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
     
    },
    profession: {
      type: String,
     
    },
    DOB: {
      type: String,
      
    },
    titleline: {
      type: String,
     
    },
    about: {
      type: String,
     
    },
    img: {
      type: String,
      default: "",
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Profile", Profile);