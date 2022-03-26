const http = require("http");
const { requesListener } = require("./request");

const host = "localhost";
const port = 8000;

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
