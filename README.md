# WebSockets Broadcast

## Description

This is a simple WebSocket server-client application. When a message is received by the server, it's broadcast to all connected clients.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.0.0 or later)
- [npm](https://www.npmjs.com/) (v6.0.0 or later)
- [VS Code](https://code.visualstudio.com/) with [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### Installing

1. Clone the repository:
```
git clone https://github.com/jparraporcar/ws-examples.git
```

2. Navigate into the project directory:
```
cd ws-examples
```

3. Install the project dependencies:
```
npm install
```

4. Compile the TypeScript files (not necessary if the .ts files are not modified)
```
npm run tsc
```

5. Start the server
```
npm start
```

## Usage

The server listens on port 8080. It serves a static HTML page and accepts WebSocket connections.
After the server is up and running, you can open the public/index.html file in VS Code and use the Live Server extension to view and interact with the web page. When a client sends a message to the server, the server broadcasts the message to all connected clients. Each message is assigned a UUID upon receipt, which is used to identify the client that sent the message. i.e. open a window in two different browsers and you can see the message broadcasted.

### Technologies

This project uses the following technologies:

- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [Express](https://expressjs.com/) - Web application framework
- [uuid](https://www.npmjs.com/package/uuid) - For creating unique identifiers
- [ws](https://www.npmjs.com/package/ws) - WebSocket library
- [TypeScript](https://www.typescriptlang.org/) - Static types for JavaScript

## Contact

If you want to contact me you can reach me at:

- **Name**: `Jordi Parra Porcar`
- **Email**: `jordiparraporcar@gmail.com`
- **LinkedIn**: [`Jordi Parra Porcar`](https://www.linkedin.com/in/jordiparraporcar/)

For any additional questions or comments, please feel free to reach out. Contributions, issues, and feature requests are welcome!

