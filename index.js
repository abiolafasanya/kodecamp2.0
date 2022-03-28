const http = require("http");
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
  server.listen(port, () =>
    console.log(`Server Listening on http://${host}:${port}`)
  );
}
