const path = require("path");
const express = require("express");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(3000, () => {
  console.log("App running");
});
