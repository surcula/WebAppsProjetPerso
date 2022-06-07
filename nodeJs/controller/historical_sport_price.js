const db = require("../models/db")

const historical_sport_priceController = {
    async create(res,begin,price,sportId){
        await db.Historicals_sports_prices.create({
            begin_date:begin,
            price : price,
            sportId:sportId
        })
        .then(()=>{
            res.write(JSON.stringify({message : "Historique price inserted"}));
            res.end();
        })
        .catch((err)=>{
            res.write(JSON.stringify({message : err}))
        })
    },
    async update(res,begin,price,sportId){
        await db.Historicals_sports_prices.update({
            begin_date:begin,
            price : price,
        },{where : {sportId:sportId}})
        .then(() => {
            res.write(JSON.stringify({ message: "Historique updated" }));
            res.end();
        })
        .catch((err) => {
            res.write(JSON.stringify({ message: err }));
            res.end();
        })
    },
    async getAll(res){
        await db.Historicals_sports_prices.findAll()
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
        await db.Historicals_sports_prices.findOne({where:{id:id}})
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

module.exports = historical_sport_priceController