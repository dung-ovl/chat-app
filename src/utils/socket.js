import io from "socket.io-client";

let socket;

// connecting to socket io server from backend
const connectSocket = (token) => {
  socket = io(process.env.REACT_APP_API_ORIGIN_SOCKET, {
    query: `token=${token}`,
  });
};

export { socket, connectSocket };
