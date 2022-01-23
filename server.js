const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./api/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.Port || 5000;

server.use(middlewares);

server.use(router);

server.listen(port);
