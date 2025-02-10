const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/api" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Olá, esta é uma API básica" }));
  } else {
    res.writeHead(404);
    res.end("Rota não encontrada");
  }
});

server.listen(3000, () => {
  console.log("API rodando em http://localhost:3000");
});
