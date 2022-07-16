"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const uuid_1 = require("uuid");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const rootDir = __dirname.replace('/dist', '');
const clients = new Map();
app.use(express_1.default.static(`${rootDir}/public`));
app.get('/', (req, res) => {
    console.log('...request received');
    res.sendFile(`${rootDir}/public/index.html`);
});
const server = app.listen(8080, () => console.log('listening'));
const wss = new ws_1.WebSocketServer({ server: server });
wss.on('connection', (ws) => {
    const id = (0, uuid_1.v4)();
    clients.set(ws, id);
    console.log(clients);
    ws.on('message', (inboundMessage) => {
        const messageParsed = JSON.parse(inboundMessage);
        console.log('received: %s', messageParsed);
        messageParsed.senderId = id;
        const outboundMessage = JSON.stringify(messageParsed);
        Array.from(clients.keys()).forEach((client) => {
            console.log(client);
            client.send(outboundMessage);
        });
    });
});
