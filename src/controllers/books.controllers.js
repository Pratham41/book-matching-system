const Books = require("../models/book.model");
const errorFunction = require("../utils/errorFunction");

const getBooks = async (req, res) => {
  try {
    const books = await Books.find({
      genre: { $regex: new RegExp(req.query.genre, "i") },
      author: { $regex: new RegExp(req.query.author, "i") },
    });
    res.status(200).json(errorFunction(false, "Books", books));
  } catch (error) {
    console.log(error);
    return res.status(500).json(errorFunction(true, "Internal server error"));
  }
};

const booksController = { getBooks };
module.exports = booksController;
