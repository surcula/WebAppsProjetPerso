const db = require("./models/db");
const userController = require("./controller/User");
const hallController = require("./controller/Hall");
const fieldController = require("./controller/Field");
const sportController = require("./controller/Sport");
const historical_sport_priceController = require("./controller/historical_sport_price");

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
db.sequelize.sync({ force: true })
    .then(() => {
        http.createServer((req, res) => {
            const currentUrl = url.parse(req.url, true)
            const path = currentUrl.pathname
            const query = currentUrl.query
            res.writeHead(200, { "Content-Type": "application/json" })
            //#region USER
            if (path === "/users/getAll" && req.method === "GET") {
                userController.getAll(res)
            }

            if (path === "/users/getOne" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        userController.getOne(res, data.id)
                    })
            }

            if (path === "/users" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        userController.insertUser(res, data.first_name, data.last_name, data.email, data.statut, data.birthdate, data.password, data.phone, data.gender, data.civilite, data.roleid, data.addresseid)
                    })
            }

            if (path === "/users/checkUser" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        userController.checkUser(res, data.email, data.password)
                    })
                    .catch((err) => {
                        res.write(JSON.stringify({ message: "Erreur " + err }))
                        res.end()
                    })
            }

            if (path === "/users/updateUser" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        userController.updateUser(res, data.id, data.first_name, data.last_name, data.email, data.statut, data.birthdate, data.phone, data.gender, data.civilite, data.addresseid)
                    })
                    .catch((err) => {
                        res.write(JSON.stringify({ message: "Erreur " + err }))
                        res.end()
                    })
            }

            if (path === "/users/updatePassword" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        userController.updatePassword(res, data.id, data.newPassword)
                    })
                    .catch((err) => {
                        res.write(JSON.stringify({ message: "Erreur " + err }))
                        res.end()
                    })
            }
            //#endregion
            //#region HALL
            if (path === "/halls/create" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        hallController.create(res, data.label)
                    })
                    .catch((err) => {
                        res.write(JSON.stringify({ message: "Erreur " + err }))
                        res.end()
                    })
            }

            if (path === "/halls/update" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        hallController.update(res, data.id, data.label)
                    })
                    .catch((err) => {
                        res.write(JSON.stringify({ message: "Erreur " + err }))
                        res.end()
                    })
            }

            if (path === "/halls/getAll" && req.method === "GET") {
                hallController.getAll(res)
            }

            if (path === "/halls/getOne" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        hallController.getOne(res, data.id)
                    })
            }
            //#endregion
            //#region FIELDS
            if (path === "/fields/create" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        fieldController.create(res, data.label, data.hallId)
                    })
                    .catch((err) => {
                        res.write(JSON.stringify({ message: "Erreur " + err }))
                        res.end()
                    })
            }

            if (path === "/fields/update" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        fieldController.update(res, data.id, data.label, data.hallID)
                    })
                    .catch((err) => {
                        res.write(JSON.stringify({ message: "Erreur " + err }))
                        res.end()
                    })
            }

            if (path === "/fields/getAll" && req.method === "GET") {
                fieldController.getAll(res)
            }

            if (path === "/fields/getOne" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        fieldController.getOne(res, data.id)
                    })
            }
            //#endregion

            //#region SPORTS
            if (path === "/sports/create" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        sportController.create(res, data.label)
                    })
                    .catch((err) => {
                        res.write(JSON.stringify({ message: "Erreur " + err }))
                        res.end()
                    })
            }

            if (path === "/sports/update" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        sportController.update(res, data.id, data.label)
                    })
                    .catch((err) => {
                        res.write(JSON.stringify({ message: "Erreur " + err }))
                        res.end()
                    })
            }

            if (path === "/sports/getAll" && req.method === "GET") {
                sportController.getAll(res)
            }

            if (path === "/sports/getOne" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        sportController.getOne(res, data.id)
                    })
            }
            //#endregion

            //#region HISTORICAL_SPORT_PRICE
            if (path === "/historical_sport_price/create" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        historical_sport_priceController.create(res, data.begin, data.price, data.sportId)
                    })
                    .catch((err) => {
                        res.write(JSON.stringify({ message: "Erreur " + err }))
                        res.end()
                    })
            }

            if (path === "/historical_sport_price/update" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        historical_sport_priceController.update(res, data.begin, data.price, data.sportId)
                    })
                    .catch((err) => {
                        res.write(JSON.stringify({ message: "Erreur " + err }))
                        res.end()
                    })
            }

            if (path === "/historical_sport_price/getAll" && req.method === "GET") {
                historical_sport_priceController.getAll(res)
            }

            if (path === "/historical_sport_price/getOne" && req.method === "POST") {
                getPostData(req)
                    .then((data) => {
                        historical_sport_priceController.getOne(res, data.id)
                    })
            }
            //#endregion

        })
            .listen(8080)
    })