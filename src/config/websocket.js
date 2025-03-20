import { Server } from "socket.io";

export const setupWebsocket = (server) => {
    const io = new Server(server, {
        cors: { origin: "*" },
    });

    io.on("connection", (socket) => {
        console.log("New Websocket connection");
        socket.on("message", (data) => {
            io.emit("message", data);
        });
    });
};
