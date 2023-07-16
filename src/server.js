const express = require("express");

//Init app
const app = express();
const port = process.env.PORT || 3000;

//Routes
app.get("/", (req, res) => {
  res.status(200).send("Lets Finish this jenkins right now");
});

app.listen(port, () => {
  console.log(`Server is up and Running on port: ${port}`);
});
