const express = require("express");
const router = express.Router();
const Profile = require("../models/profile.model");
const middleware = require("../middleware");

const path = require("path");


router.route("/add").post(middleware.checkToken, (req, res) => {
    const profile = Profile({
      username: req.decoded.username,
      name: req.body.name,
      profession: req.body.profession,
      DOB: req.body.DOB,
      titleline: req.body.titleline,
      about: req.body.about,
    });

    profile
      .save()
      .then(() => {
        return res.json({ msg: "profile successfully stored" });
      })
      .catch((err) => {
        return res.status(400).json({ err: err });
      });
  });


// Check Profile data

router.route("/checkProfile").get(middleware.checkToken, (req, res) => {
    Profile.findOne({ username: req.decoded.username }, (err, result) => {
      if (err) return res.json({ err: err });
      else if (result == null) {
        return res.json({ status: false, username: req.decoded.username });
      } else {
        return res.json({ status: true, username: req.decoded.username });
      }
    });
  });


  module.exports = router;