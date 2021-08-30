const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const orderSchema = new Schema(
  {
    client_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "client",
      required: [true, "client id is required"],
    },
    products: {
      type: [
        {
          type: mongoose.SchemaTypes.ObjectId,
          ref: "product",
          required: [true, "At least one product is required"],
        },
      ],
      required: [true, "Products is required"],
    },
    price: { type: Number },
  },

  {
    timestamps: true,
  },
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
