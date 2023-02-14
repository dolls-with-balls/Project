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
