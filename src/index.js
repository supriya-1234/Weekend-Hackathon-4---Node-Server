var http = require("http");

const httpServer = http.createServer(function (req, res) {
  if (req.url === "/welcome") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to Dominos!");
    res.end();
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.send({
      phone: "18602100000",
      email: "guestcaredominos@jublfood.com"
    });
    res.end();
  } else {
    res.send({
      status: 404
    });
    res.end();
  }
});
httpServer.listen(8081);
module.exports = httpServer;
