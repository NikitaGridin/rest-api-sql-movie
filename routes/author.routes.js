const Router = require("express");
const router = new Router();
const authorController = require("../controllers/author.controller");

router.get("/author", authorController.getAllAuthors);
router.get("/author/:id", authorController.getOneAuthor);
router.post("/author", authorController.createAuthor);
router.put("/author", authorController.updateAuthor);
router.delete("/author/:id", authorController.delAuthor);

module.exports = router;
