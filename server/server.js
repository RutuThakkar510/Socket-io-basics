const socket = require("socket.io");

const app = require("express")();

const server = require("http").Server(app);

const io = socket(server);

io.on("connection", (socket) => {
  console.log("connected with socket", socket.id);
});

server.listen(4000, () => {
  console.log("listening on port http://localhost:4000");
});
