const db = require("../models/db")

const userController = {
    getAllUsers(res) {
        db.Users.findAll()
            .then((result) => {
                res.write(JSON.stringify(result.map(
                    elem=> elem.toJSON()
                )))
            })
    }
}

module.exports = userController