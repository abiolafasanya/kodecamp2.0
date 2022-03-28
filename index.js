const http = require("http");
const { hostname } = require("os");
const { requesListener } = require("./request");

const host = process.env.HOST_NAME || "localhost";
const port = process.env.PORT || 8000;

const server = (action) => {
  let myServer = http.createServer(action);
  listener(myServer);
};

//requests
server(requesListener);

function listener(server) {
  server.listen(port, host, () =>
    console.log(`Server Listening on http://${host}:${port}`)
  );
}
