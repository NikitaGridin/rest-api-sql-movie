const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const authorRouter = require("./routes/author.routes");
app.use(express.json());

app.use("/api", authorRouter);

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
