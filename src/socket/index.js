import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("connected");

  const username = socket.username;
  const rooms = socket.rooms;

  console.log({ username, rooms });

  socket.on("message", (msg) => {
    console.log({ msg });

    socket.emit("message", "I'm sending a message to you");
  });

  io.on("disconnect", () => {
    console.log("disconnected");
  });
});
