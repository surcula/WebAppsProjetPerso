const db = require("./models/db");

db.sequelize.sync({force:true})
    .then(()=>{
        console.log("synchronisée")
    })