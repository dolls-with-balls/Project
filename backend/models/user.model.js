const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  roles: {
    type: Array,
    default: ["publisher"],
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const User = model("user", userSchema);

module.exports.User = User;
