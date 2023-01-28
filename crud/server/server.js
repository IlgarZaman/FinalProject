const express = require("express");
const mongoose = require("mongoose");
const { Flower } = require("./models/schema");
const cors = require("cors");
const app = express();
const port = 8080;
app.use(cors());
app.use(express.json());

app.get("/flower", async (req, res) => {
  const allFlower = await Flower.find();
  return res.status(200).json(allFlower);
});
app.get("/flower/:id", async (req, res) => {
  const { id } = req.params;
  const allFlowerById = await Flower.findById(id);
  return res.status(200).json(allFlowerById);
});
app.delete("/flower/:id", async (req, res) => {
  const { id } = req.params;
  const allFlowerDelete = await Flower.findByIdAndDelete(id);
  return res.status(200).json(allFlowerDelete);
});
app.post("/flower", async (req, res) => {
  const newFlower = new Flower({ ...req.body });
  const insertFlower = await newFlower.save();
  return res.status(201).json(insertFlower);
});

const start = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://ilqarzaman:ilqarzaman@cluster0.1adlq4a.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
start();
