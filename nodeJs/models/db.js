require("dotenv").config();
const { Sequelize, DataTypes} = require ("sequelize");
const authorizationsModel = require("./Authorizations-model");
const rolesModel = require("./Roles-model");
const usersModel = require("./Users-model");
const ordersModel = require("./Orders-model");
const discountsModel = require("./Discounts-model");

const sequelize = new Sequelize (process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
    host : process.env.DB_HOST,
    dialect : "mysql",
    logging : false 
})

const db = {
    sequelize : sequelize,
    Sequelize : Sequelize,
    Users: usersModel(sequelize,DataTypes),
    Roles: rolesModel(sequelize, DataTypes),
    Authorizations: authorizationsModel(sequelize, DataTypes),
    Orders : ordersModel(sequelize,DataTypes),
    Discounts : discountsModel(sequelize,DataTypes)
}

// Relations many to many
db.Roles.belongsToMany(db.Authorizations,{through : 'Users_Roles'});
db.Orders.belongsToMany(db.Discounts,{through : 'Orders_Discounts'});

//relation one to many
db.Users.hasMany(db.Roles);
db.Orders.hasMany(db.Users);

module.exports = db;
