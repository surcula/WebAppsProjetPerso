const db = require("../models/db")

const hallController = {
    async insertHall(res,label){
        await db.Halls.create({
            label:label
        })
        .then(()=>{
            res.write(JSON.stringify({message : "hall inserted"}));
            res.end();
        })
        .catch((err)=>{
            res.write(JSON.stringify({message : err}))
        })
    },
    async updateHall(res,id,label){
        await db.Halls.update({
            label:label
        },{where : {id:id}})
        .then(() => {
            res.write(JSON.stringify({ message: "hall updated" }));
            res.end();
        })
        .catch((err) => {
            res.write(JSON.stringify({ message: err }));
            res.end();
        })
    },
    async getAll(res){
        await db.Halls.findAll()
        .then((result) => {
            res.write(JSON.stringify(result.map(
                elem => elem.toJSON()
            )))
            res.end();
        })
        .catch(() => {
            res.write(JSON.stringify({ message: err }));
            res.end();
        })
    },
    async getOne(res,id){
        await db.Halls.findOne({where:{id:id}})
    }
}

module.exports = hallController