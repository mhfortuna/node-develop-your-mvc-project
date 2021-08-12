const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const validator = require("validator");
// const db = require("./index");

const employeeSchema = new Schema(
  {
    fullName: {
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
    password: {
      type: String,
      required: [true, "The password is required"],
    },
    isAdmin: {
      type: Boolean,
      required: [true, "The password is required"],
    },
    profileImage: {
      type: String,
    },
  },

  {
    timestamps: true,
  },
);

// Scheme hooks
employeeSchema.post("save", function (error, doc, next) {
  if (error.code === 11000 && error.keyPattern.email)
    next(new Error("Email already exists!"));
  else next(error);
});

const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;
