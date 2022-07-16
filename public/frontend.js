"use strict";
const form = document.getElementById('form');
const pSocketId = document.getElementById('socketId');
const messageInput = document.getElementById('message-input');
const ws = new WebSocket('ws://localhost:8080');
ws.onopen = () => {
    console.log('after opening', `readyState = ${ws.readyState}`);
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (messageInput.value === '')
            return;
        const messageObject = { sendId: null, text: messageInput.value };
        const outboundMessageObject = JSON.stringify(messageObject);
        ws.send(outboundMessageObject);
    });
};
ws.onmessage = (webSocketMessage) => {
    console.log(webSocketMessage);
    const parsedMessage = JSON.parse(webSocketMessage.data);
    pSocketId.innerHTML = parsedMessage.text;
};
ws.onerror = () => {
    console.log('WebSocket error');
};
