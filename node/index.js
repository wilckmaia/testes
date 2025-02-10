const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Olá mundo este é algum dos meus primeiros servidores Node.js");
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
