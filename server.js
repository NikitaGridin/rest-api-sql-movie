const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const sequelize = require("./db");

const authorRouter = require("./routes/author.routes");
app.use(express.json());

app.use("/api", authorRouter);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(err.stack);
});
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => console.log(`Server listen on port ${port}`));
  } catch (e) {
    console.log(e);
  }
};

start();
