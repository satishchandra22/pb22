const http = require("http");

const server = http.createServer((req, res) => {
    const data = JSON.stringify({name:'satish',subject:'nodejs'})
    if(req.url === "/send") {
        res.write(data)
        res.end()
    }
})
// Have the server listen on port 9000
server.listen(9000);