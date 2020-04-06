
const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({ port: 9090 })

const clients = [];
wss.on('connection', (connection) => {
    clients.push(connection)

    connection.on('message', (message) => {
        const data = JSON.parse(message)
        console.log(data)
        connection.send(JSON.stringify(data));

        // clients.forEach((client) => {
        //     console.log(JSON.stringify(data))
        //     client.send(JSON.stringify(data))
        // })
    })
})





// const WebSocketServer = require('ws').Server

// const wss = new WebSocketServer({ port: 9090 })


// const clients = [];
// let holder = [];
// wss.on('connection', (connection) => {
//     clients.push(connection)
//     // console.log(connection, 'connection ')
//     connection.on('message', (message) => {
//         let data = JSON.parse(message)
//         holder.push({
//             myUser: data.username.myUser,
//             message: data.message
//         })
//         console.log(holder, 'holder')
//         // clients.forEach((client) => {
//         //     client.send(JSON.stringify(data))
//         // })
//     })
//     let dataToSend = JSON.stringify(holder.slice(-1))
//     connection.send(dataToSend)
// })