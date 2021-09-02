const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const orderSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: { type: String },
    phoneNumber: { type: String },
    email: { type: String, required: [true, "Email is required"] },
    address: { type: String },
    zipCode: { type: String },
    city: { type: String },
    country: { type: String },
    products: { type: Map },
    orderTotal: {
      type: Number,
    },
  },

  {
    timestamps: true,
  },
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
