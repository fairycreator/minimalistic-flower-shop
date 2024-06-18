// server/server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const products = [
  {
    id: "1",
    name: "Bouquet of Roses",
    description: "A beautiful bouquet of red roses.",
    price: 29.99,
    image: "/images/roses.jpg",
  },
  {
    id: "2",
    name: "Sunflowers",
    description: "Bright sunflowers to brighten your day.",
    price: 19.99,
    image: "/images/sunflowers.jpg",
  },
  // Add more products as needed
];

// Endpoint to get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Endpoint to get a product by ID
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
