const http = require("http");

const port = 3000;
http
  .createServer((req, res) => {
    res.write("hello world");
    console.log(`server connnected ${port}`);
    res.end();
  })
  .listen(port);
