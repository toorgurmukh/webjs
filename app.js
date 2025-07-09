const express = require('express');
const app = express();
const http = require('http');
const PORT = 3000;
const { Server } = require('socket.io');
const server = http.CreateServer(app);
const io = new Server(server);

app.use(express.static('public'));

app.listen(PORT, () => {
	console.log(`Started at http://localhost:${PORT}`);
});

