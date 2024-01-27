/* Events */

const EventEmitter = require('events');

const emitter = new EventEmitter();

const databaseconnection = (data) => {
    console.log("connected", data);
}

emitter.on("connection", databaseconnection)
emitter.emit("connection", { name: "jittu" });
emitter.emit("connection");
emitter.removeListener("connection", databaseconnection);
emitter.emit("connection");
emitter.emit("connection");