const port = process.env.PORT || 5000;
const io = require("socket.io")(port, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User online");

  socket.on("canvas-data", (data) => {
    socket.broadcast.emit("canvas-data", data);
  });
});
