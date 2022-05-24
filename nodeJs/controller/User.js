const db = require("../models/db")
const bcrypt = require("bcrypt");

const saltRounds = 10;

const userController = {
    getAllUsers(res) {
        db.Users.findAll({
            attributes: {exclude:['password']}
        })
            .then((result) => {
                res.write(JSON.stringify(result.map(
                    elem => elem.toJSON()
                )))
                res.end()
            })
            .catch(() => {
                res.write(JSON.stringify({ message: "Erreur" }))
                res.end()
            })
    },
    insertUser(res, national_number, first_name, last_name, email, statut, birthdate, password, phone, gender, civilite, roleid, addresseid) {

        const hashPsw = bcrypt.hashSync(password, saltRounds);
        const hashNn = bcrypt.hashSync(national_number, saltRounds);
        db.Users.create({
            national_number: hashNn, // attention faut crypter
            first_name: first_name,
            last_name: last_name,
            email: email,
            statut: statut,
            birthdate: birthdate,
            password: hashPsw, // attention faut crypter           
            phone: phone,
            gender: gender,
            civilite: civilite,
            roleId: roleid,
            addresseId: addresseid
        })
            .then(() => {
                res.write(JSON.stringify({ message: "User inserted" }))
                res.end()
            })
            .catch((err) => {
                res.write(JSON.stringify({ message: "Erreur"}))
                res.end()
            })



    }
}

module.exports = userController