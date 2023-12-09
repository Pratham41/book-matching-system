const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publication_year: {
      type: Number,
      require: true,
      default: new Date().getFullYear(),
    },
    genre: {
      type:String,
      required:true
    },
    minimumAge: {
      type: Number,
      required: true,
      default: 10,
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "OTHER", "ALL"],
      required: true,
      default: "ALL",
    },
  },
  {
    timestamps: true,
  }
);

const Books = mongoose.model("Books", bookSchema);
module.exports = Books;
