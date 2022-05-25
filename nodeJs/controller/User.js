const db = require("../models/db")
const bcrypt = require("bcrypt");

const saltRounds = 10;

const userController = {
    async getAllUsers(res) {
        await db.Users.findAll({
            attributes: { exclude: ['password'] }
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
    async insertUser(res, first_name, last_name, email, statut, birthdate, password, phone, gender, civilite, roleid, addresseid) {
        const hashPsw = bcrypt.hashSync(password, saltRounds);
        await db.Users.create({
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
                res.write(JSON.stringify({ message: "User inserted" }));
                res.end();
            })
            .catch((err) => {
                res.write(JSON.stringify({ message: "Erreur" + err }));
                res.end();
            })
    },
    async checkUser(res, email, password) {
        const user = await db.Users.findOne({ where: { email: email } });

        if (!user || !bcrypt.compareSync(password, user.password)) {
            res.json({ message: "0" });
        } else {
            const result = await db.Users.findOne({
                where: { id: 2 },
                attributes: { exclude: ['password'] },
                raw: true
            });
            res.write(JSON.stringify(result));
            res.end();
        }
    },
    async updateUser(res, id, first_name, last_name, email, statut, birthdate, phone, gender, civilite, addresseid) {
        await db.Users.update({
            first_name: first_name,
            last_name: last_name,
            email: email,
            statut: statut,
            birthdate: birthdate,
            phone: phone,
            gender: gender,
            civilite: civilite,
            addresseId: addresseid
        },
            {
                where: { id: id }
            })
            .then(() => {
                res.write(JSON.stringify({ message: "User updated" }));
                res.end();
            })
            .catch((err) => {
                res.write(JSON.stringify({ message: err }));
                res.end();
            })
    },
    async updatePassword(res, id, newPassword) {
        const hash = bcrypt.hashSync(newPassword, saltRounds);
        await db.Users.update({
            password: hash
        },
            {
                where: { id: id }
            })
            .then(() => {
                
                res.end();
            })
            .catch((err) => {
                res.write(JSON.stringify({ message: "Erreur" }));
                res.end();
            })
    }
}

module.exports = userController