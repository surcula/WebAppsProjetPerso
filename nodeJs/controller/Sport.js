const db = require("../models/db")

const sportController = {
    async create(res,label){
        await db.Sports.create({
            label:label
        })
        .then(()=>{
            res.write(JSON.stringify({message : "sport inserted"}));
            res.end();
        })
        .catch((err)=>{
            res.write(JSON.stringify({message : err}))
        })
    },
    async update(res,id,label){
        await db.Historicals_sports_prices.create(res,)
        await db.Sports.update({
            label:label
        },{where : {id:id}})
        .then(() => {
            res.write(JSON.stringify({ message: "sport updated" }));
            res.end();
        })
        .catch((err) => {
            res.write(JSON.stringify({ message: err }));
            res.end();
        })
    },
    async getAll(res){
        await db.Sports.findAll()
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
        await db.Sports.findOne({where:{id:id}})
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

module.exports = sportController