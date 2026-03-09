import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(3001, () => {
  console.log("server running");
});
