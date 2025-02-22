const WebSocketServer = require('websocket').server;
const http = require('https');

const PORT = process.env.PORT || 8080;
const server = http.createServer();

const room = new Map; 
server.listen(PORT, () => {
    console.log("server started on port: ", PORT);
})

wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: true
    // !todo() implement authenticity (origin)
})

wsServer.on('request', (request) => {
    //accept connection over echo protocol
    const connection = request.accept('echo-protocol');
    connection.on('message', (data) => {
        let message = JSON.parse(data.utf8Data);
        console.log(message)
        if(message.type == "joinRoom"){
            const connections = room.get(message.roomId) || [];
            room.set(message.roomId, [...connections, connection]);
            // console.log(room.get(message.roomId))
        }
        if(message.type == "notify"){
            console.log(message.message)
        }
        if(message.type == "message"){
            console.log("Client: " + message.message);
            const users = room.get(message.roomId);
            console.log(users.length)
            for(const user of users){
                if(user.connected){
                    if(user !== connection){
                        user.sendUTF(JSON.stringify({type: "message", message: message.message}));
                    }
                }
            }
        }
    })
})




