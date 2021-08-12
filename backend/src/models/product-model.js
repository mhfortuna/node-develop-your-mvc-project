const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const productSchema = new Schema(
  {
    images: {
      main: {
        type: String,
        required: [true, "At least one image is required"],
      },
      others: { type: [String] },
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: Number,
      default: 0,
      required: [true, "Price is required"],
    },
    unitsInStock: {
      //TODO: Validate int?
      type: Number,
      default: 0,
      required: [true, "Stock units is required"],
    },
    lens: { type: [String] },
  },

  {
    timestamps: true,
  },
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
