

const WebSocket = require('ws');

let wsServer = new WebSocket.Server({
    port: 8081
});

let users = []

wsServer.on('connection', function (ws) {
let user = {
      connection: ws
    }
    users.push(user)
    ws.on('message', function (message) {
        for (let user of users) {
        console.log(message);
          user.connection.send(message)
        }
    })
    ws.on('close', function () {
        let id = users.indexOf(user)
        users.splice(id, 1)
    })
})
