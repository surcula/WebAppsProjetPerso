const db = require("../models/db")

const fieldController = {
    async create(res,label,hallId){
        await db.Fields.create({
            label:label,
            hallId:hallId
        })
        .then(()=>{
            res.write(JSON.stringify({message : "field inserted"}));
            res.end();
        })
        .catch((err)=>{
            res.write(JSON.stringify({message : err}))
        })
    },
    async update(res,id,label,hallId){
        await db.Fields.update({
            label:label,
            hallId:hallId
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
        await db.Fields.findAll()
        .then((result) => {
            res.write(JSON.stringify(result.map(
                elem => elem.toJSON()
            )))
            res.end();
        })
        .catch((err) => {
            res.write(JSON.stringify({ message: err }));
            res.end();
        })
    },
    async getOne(res,id){
        await db.Fields.findOne({where:{id:id}})
        .then((result) => {
            res.write(JSON.stringify(result.toJSON()
            ))
            res.end();
        })
        .catch((err) => {
            res.write(JSON.stringify({ message: err }));
            res.end();
        })  
    }
}

module.exports = fieldController