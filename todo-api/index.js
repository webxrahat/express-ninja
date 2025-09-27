const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const connctDb = require("./config/dbConnection");
require("dotenv").config();
const port = process.env.PORT || 5001;

connctDb();

const app = express();
app.use(express.json());

app.use("/api/todos", require("./routers/todosRouter"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`This server is runing on ${port}`);
});
