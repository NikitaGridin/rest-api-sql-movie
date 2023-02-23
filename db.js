const { Sequelize } = require("@sequelize/core");

module.exports = new Sequelize("aruisidp_mysql", "aruisidp_mysql", "mD*635Kk", {
  host: "aruisidp.beget.tech",
  dialect: "mysql",
});
