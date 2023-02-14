const { User } = require("../models/user.model");

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await User.findByIdAndDelete(id);
    res.send(result);
  } catch (err) {
    res.status(401).send(err);
  }
};

const getUsers = async (req, res) => {
  try {
    const result = await User.find({}); //populate("posts")
    res.send(result);
  } catch (err) {
    res.status(404).send(err);
  }
};

const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await User.findById(id); //populate("posts")
    res.send(result);
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = { deleteUser, getUser, getUsers };
const express = require("express");

const signupUser = async (req, res) => {
  const { password, passwordConfirm, username, roles } = req.body;
  const exist = await User.findOne({ username });
  if (!exist) {
    if (username && password) {
      if (password === passwordConfirm) {
        try {
          const encrypted = await bcrypt.hash(password, 10);
          const user = await new User({
            username,
            password: encrypted,
            roles,
          }).save();
          res.send(user);
        } catch (err) {
          res.status(403);
        }
      }
    } else {
      res.status(401);
    }
  } else {
    res.sendStatus(401);
  }
};
module.exports = { signupUser };
