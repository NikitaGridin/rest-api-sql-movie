const sequelize = require("../db");
const { DataTypes } = require("@sequelize/core");

const Author = sequelize.define(
  "author",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    surname: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
  }
);

const Movie = sequelize.define(
  "movie",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
  }
);

Author.hasMany(Movie);
Movie.belongsTo(Author);

module.exports = {
  Author,
  Movie,
};
