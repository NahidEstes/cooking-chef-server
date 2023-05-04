const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefInformation = require("./data/chef-data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Food Chef is Running");
});

app.get("/chef-info", (req, res) => {
  res.send(chefInformation);
});

app.get("/chef-info/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const chefDetails = chefInformation.find((n) => n.id === id);
  res.send(chefDetails);
  console.log(id);
});

app.listen(port, () => {
  console.log(`Food Chef is running on port: ${port}`);
});
