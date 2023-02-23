const { Sequelize } = require("@sequelize/core");

module.exports = new Sequelize("aruisidp_mysql", "aruisidp_mysql", "5xUQ11Y*", {
  host: "aruisidp.beget.tech",
  dialect: "mysql",
});
