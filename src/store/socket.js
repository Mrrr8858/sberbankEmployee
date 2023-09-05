import io from "socket.io-client";

const socket = io("ws://localhost:8765/employee/my-websocket-endpoint");

export default socket;
