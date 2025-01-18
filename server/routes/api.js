const express = require("express");
const router = express.Router();



// Sample GET route
router.get("/users", (req, res) => {
  res.status(200).json({ users: ["Alice", "Bob", "Charlie"] });
});

// Sample POST route
router.post("/users", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  res.status(201).json({ message: `User ${name} created successfully!` });
});

// Sample PUT route
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  res.status(200).json({ message: `User ${id} updated to ${name}` });
});

// Sample DELETE route
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `User ${id} deleted successfully!` });
});

module.exports = router;
