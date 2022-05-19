const db = require("./models/db");
const userController = require("./controller/User")

const http = require("http")
const url = require("url")

db.sequelize.sync()
    .then(()=>{
        http.createServer((req, res) => {
            const currentUrl = url.parse(req.url, true)
            const path = currentUrl.pathname
            const query = currentUrl.query

            res.writeHead(200, { "Content-Type": "application/json" })

            if (path === "/users" && req.method === "GET") {
                userController.getAllUsers(res)
            }
        })
        .listen(8080)
    })