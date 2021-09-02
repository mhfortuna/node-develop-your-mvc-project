const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const orderSchema = new Schema(
  {
    // client_id: {
    //   type: mongoose.SchemaTypes.ObjectId,
    //   ref: "client",
    //   required: [true, "client id is required"],
    // },
    // products: {
    //   type: [
    //     {
    //       type: mongoose.SchemaTypes.ObjectId,
    //       ref: "product",
    //       required: [true, "At least one product is required"],
    //     },
    //   ],
    //   required: [true, "Products is required"],
    // },
    // price: { type: Number },
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
  },

  {
    timestamps: true,
  },
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
