const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const orderSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    phoneNumber: { type: String },
    email: { type: String },
    address: { type: String },
    zipCode: { type: String },
    city: { type: String },
    country: { type: String },
    products: { type: Array },
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
