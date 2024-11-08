const express = require("express");
const cors = require("cors");

function setupServer() {
  const app = express();

  app.use("/", express.static("frontend/dist"));
  app.use(cors());
  app.use(express.json());

  app.get("/api/hello", (req, res) => {
    res.json({ title: "TsuguTsugu" });
  });

  return app;
}

module.exports = {
  setupServer,
};
