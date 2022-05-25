const db = require("./models/db");
const userController = require("./controller/User")

const http = require("http")
const url = require("url")

const getPostData = (req) => {
    return new Promise((resolve, reject) => {
        let body = ""
        req.on("data", data => {
            body += data
        })
        req.on("end", () => {
            resolve(JSON.parse(body))
        })

    })
}

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

            if (path === "/users" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        userController.insertUser(res,data.first_name,data.last_name,data.email,data.statut,data.birthdate,data.password,data.phone,data.gender,data.civilite,data.roleid,data.addresseid)
                    })
            }

            if (path === "/users/checkUser" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        userController.checkUser(res,data.email,data.password)
                    })
                    .catch((err) => {
                        res.write(JSON.stringify({ message: "Erreur " + err }))
                        res.end()
                    })
            }

            if (path === "/users/updateUser" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        userController.updateUser(res,data.id,data.first_name,data.last_name,data.email,data.statut,data.birthdate,data.phone,data.gender,data.civilite,data.addresseid)
                    })
                    .catch((err) => {
                        res.write(JSON.stringify({ message: "Erreur " + err }))
                        res.end()
                    })
            }

            if (path === "/users/updatePassword" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        userController.updatePassword(res,data.id,data.newPassword)
                    })
                    .catch((err) => {
                        res.write(JSON.stringify({ message: "Erreur " + err }))
                        res.end()
                    })
            }            
        })
        .listen(8080)
    })