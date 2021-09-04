const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const validator = require("validator");

const clientSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    firebase_id: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "The email is required"],
      trim: true,
      unique: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: (props) => `The email ${props.value} is not valid`,
      },
    },
  },

  {
    strict: false,
    timestamps: true,
  },
);

// Scheme hooks
clientSchema.post("save", function (error, doc, next) {
  if (error.code === 11000 && error.keyPattern.email)
    next(new Error("Email already exists!"));
  else next(error);
});

const Client = mongoose.model("client", clientSchema);

module.exports = Client;
