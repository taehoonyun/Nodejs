const express = require("express");
const app = express();
const server = app.listen(3001, () => {
  console.log("Start Server : localhost:3001");
});

app.get("/api/users/:type", async (req, res) => {
  let { type } = req.params;

  if (type == "seoul") {
    let data = [
      { name: "Teahoon", city: "seoul" },
      { name: "Elle", city: "seoul" },
    ];
    res.send(data);
  } else if (type == "jeju") {
    let data = [
      { name: "sunjae", city: "jeju" },
      { name: "sowon", city: "jeju" },
    ];
    res.send(data);
  } else {
    res.send("Type is not correct");
  }
});
