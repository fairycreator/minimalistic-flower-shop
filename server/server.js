const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5001;

// Use CORS middleware
app.use(cors());
app.use(express.json());

let products = [
  // Example products
  {
    id: 1,
    name: "Rose Bouquet",
    price: 2999,
    image: "rose.jpg",
    description: "Beautiful roses",
  },
  {
    id: 2,
    name: "Tulip Bouquet",
    price: 1999,
    image: "tulip.jpg",
    description: "Colorful tulips",
  },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
