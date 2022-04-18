const express = require("express");

const app = express();

const PORT = 5000;

app.use("/", (req, res) => {
  res.status(200).send("backend server connection established");
});

app.listen(PORT, () => {
  console.log(`server running @ ${PORT}`);
});
