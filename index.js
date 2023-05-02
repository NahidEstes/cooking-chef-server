const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefInformation = require("./data/chef-data.json");

// const touristSpot = require("./data/travel-data.json");
// const travelDetails = require("./data/travel-details-data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Food Chef is Running");
});

app.get("/chef-info", (req, res) => {
  res.send(chefInformation);
});

// app.get("/travel-details", (req, res) => {
//   res.send(travelDetails);
// });

// app.get("/travel-details/:id", (req, res) => {
//   const id = req.params.id;
//   const selectedDetails = travelDetails.find((n) => n.id === id);
//   res.send(selectedDetails);
//   console.log(id);
// });

// app.get("/news/:id", (req, res) => {
//   const id = req.params.id;
//   const selectedNews = news.find((n) => n._id === id);
//   res.send(selectedNews);
// });

// -------------

// app.get("/news/:id", (req, res) => {
//   const id = req.params.id;
//   const selectedNews = news.find((n) => n._id === id);
//   res.send(selectedNews);
// });

// app.get("/categories/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   if (id === 0) {
//     res.send(news);
//   } else {
//     const categoryNews = news.filter((n) => parseInt(n.category_id) === id);
//     res.send(categoryNews);
//   }
// });

app.listen(port, () => {
  console.log(`Food Chef is running on port: ${port}`);
});
