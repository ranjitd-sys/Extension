const socket = new WebSocket("ws://localhost:8080");

socket.onopen = () => {
  console.log("Connected to external program");
};

socket.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  console.log("Received:", msg);
};

// send back if needed
function send(msg) {
  socket.send(JSON.stringify(msg));
}