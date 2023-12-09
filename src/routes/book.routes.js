const router = require("express").Router();
const bookController = require("../controllers/books.controllers");

router.route("/").get(bookController.getBooks);

module.exports = router;
