const db = require("../models/db")

const sport_fieldController = {
    async create(res,sportId,fieldId,start_time,end_time,date_start,day){
        await db.Sports_fields.create({
            sportId : sportId,
            fieldId : fieldId,
            start_time : start_time,
            end_time : end_time,
            date_start : date_start,
            day : day
        })
        .then(()=>{
            res.write(JSON.stringify({message : "sport_field inserted"}));
            res.end();
        })
        .catch((err)=>{
            res.write(JSON.stringify({message : err}))
        })
    },
    async update(res,id,sportId,fieldId,start_time,end_time,date_start,day){
        await db.Sports_fields.create(res,)
        await db.Sports.update({
            sportId : sportId,
            fieldId : fieldId,
            start_time : start_time,
            end_time : end_time,
            date_start : date_start,
            day : day
        },{where : {id:id}})
        .then(() => {
            res.write(JSON.stringify({ message: "sport_field updated" }));
            res.end();
        })
        .catch((err) => {
            res.write(JSON.stringify({ message: err }));
            res.end();
        })
    },
    async getAll(res){
        await db.Sports_fields.findAll()
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

module.exports = sport_fieldController