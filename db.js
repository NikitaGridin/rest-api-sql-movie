const { Sequelize } = require("@sequelize/core");

module.exports = new Sequelize("movie", "root", "", {
  host: "https://free13.beget.com/phpMyAdmin/db_structure.php?server=1&db=m95062yu_mysql",
  dialect: "mysql",
});
