const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 5001;

const app = express();
app.use(express.json());

app.use("/api/todos", require("./routers/todosRouter"));

app.listen(port, () => {
  console.log(`This server is runing on ${port}`);
});
