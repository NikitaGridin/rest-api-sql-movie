// const db = require("../db");

class authorController {
  async getAllAuthors(req, res) {
    //     const allAuthors = await db.query(
    //       `SELECT * FROM author`,
    //       function (err, results, fields) {
    //         res.json(results);
    //       }
    //     );
    const a = [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
    ];
    res.json(a);
  }

  async createAuthor(req, res) {
    // const { name, surname } = req.body;
    // const sql = "INSERT INTO author (name, surname) VALUES (?)";
    // const values = [name, surname];
    // db.query(sql, [values], function (err, results) {
    //   if (err) {
    //     res.json(err);
    //   } else {
    //     res.json(results);
    //   }
    // });
  }
  async getOneAuthor(req, res) {
    // const id = req.params.id;
    // const sql = "SELECT * FROM author WHERE id=?";
    // db.query(sql, id, function (err, results) {
    //   if (err) {
    //     res.json(err);
    //   } else {
    //     res.json(results);
    //   }
    // });
  }
  async updateAuthor(req, res) {
    // const { id, name, surname } = req.body;
    // const sql = "UPDATE author SET name=?, surname=? WHERE id=?";
    // db.query(sql, [name, surname, id], function (err, results) {
    //   if (err) {
    //     res.json(err);
    //   } else {
    //     res.json(results);
    //   }
    // });
  }
  async delAuthor(req, res) {
    // const id = req.params.id;
    // const sql = "DELETE FROM author WHERE id = ?";
    // db.query(sql, [id], function (err, results) {
    //   if (err) {
    //     res.json(err);
    //   } else {
    //     res.json(results);
    //   }
    // });
  }
}
module.exports = new authorController();
