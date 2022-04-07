const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });


socket.on("connect", () => {
    console.log(socket.id); // ojIckSD2jqNzOqIrAGzL
  });