const { Author } = require("../models/models");
class authorController {
  async getAllAuthors(req, res, next) {
    const author = await Author.findAll();
    return res.status(201).json(author);
  }
  async getOneAuthor(req, res, next) {
    const { id } = req.params;

    const author = await Author.findAll({
      where: {
        id: id,
      },
    });
    if (author.length > 0) {
      return res.status(201).json(author);
    } else {
      return res.status(404).json("Пользователь не найден!");
    }
  }
  async createAuthor(req, res, next) {
    const { name, surname } = req.body;

    const author = await Author.create({ name: name, surname: surname });
    return res.status(201).json(author);
  }

  async updateAuthor(req, res, next) {
    const { id, name, surname } = req.body;

    const author = await Author.update(
      { name: name, surname: surname },
      {
        where: {
          id: id,
        },
      }
    );
    return res.json(author);
  }
  4;
  async delAuthor(req, res, next) {
    const { id } = req.params;
    const author = await Author.destroy({
      where: {
        id: id,
      },
    });
    if (author.length > 0) {
      return res.status(201).json(author);
    } else {
      return res.status(404).json("Пользователь не найден");
    }
  }
}
module.exports = new authorController();
