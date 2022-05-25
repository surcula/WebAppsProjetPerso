require("dotenv").config();
const { Sequelize, DataTypes} = require ("sequelize");
const authorizationsModel = require("./Authorizations-model");
const rolesModel = require("./Roles-model");
const usersModel = require("./Users-model");
const ordersModel = require("./Orders-model");
const discountsModel = require("./Discounts-model");
const addresseModel = require("./Addresses-model");
const cityModel = require("./cities-model");
const countryModel = require("./countries-model");
const fieldModel = require("./Fields-model");
const hallModel = require("./Halls-model");
const subscriptionsModel = require("./Subscriptions-model");
const reservationsModel = require("./reservations-model");
const sportModel = require("./Sports.model");
const historical_sport_priceModel = require("./Historicals_sports_prices-model");
const user_subscriptionsModel = require("./Users_subscriptions-model");
const sport_fieldModel = require("./sports_fields-model");
const closeModel = require("./closes");
const eventModel = require("./Events-model");


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
    Discounts : discountsModel(sequelize,DataTypes),
    Addresses : addresseModel(sequelize,DataTypes),
    Cities : cityModel(sequelize,DataTypes),
    Country : countryModel(sequelize,DataTypes),
    Fields : fieldModel(sequelize,DataTypes),
    Halls : hallModel(sequelize,DataTypes),
    Reservations : reservationsModel(sequelize,DataTypes),
    Subscriptions : subscriptionsModel(sequelize,DataTypes),
    Sports : sportModel(sequelize,DataTypes),
    Historicals_sports_prices : historical_sport_priceModel(sequelize,DataTypes),
    User_subscriptions : user_subscriptionsModel(sequelize,DataTypes),
    Sports_fields : sport_fieldModel(sequelize,DataTypes),
    Closes : closeModel(sequelize,DataTypes),
    Events : eventModel(sequelize,DataTypes)
}

// Relations many to many
db.Roles.belongsToMany(db.Authorizations,{through : 'roles_authorizations'});
db.Orders.belongsToMany(db.Discounts,{through : 'orders_discounts'});
db.Subscriptions.belongsToMany(db.Orders,{through : 'orders_subscriptions'});

//relation one to many
db.Roles.hasMany(db.Users);
db.Users.belongsTo(db.Roles);

db.Addresses.hasMany(db.Users);
db.Users.belongsTo(db.Addresses);

db.Cities.hasMany(db.Addresses);
db.Addresses.belongsTo(db.Cities);

db.Country.hasMany(db.Cities);
db.Cities.belongsTo(db.Country);

db.Users.hasMany(db.Orders);
db.Orders.belongsTo(db.Users);

db.Users.hasMany(db.Reservations);
db.Reservations.belongsTo(db.Users);

db.Reservations.hasMany(db.Sports_fields);
db.Sports_fields.belongsTo(db.Reservations);

db.Fields.hasMany(db.Halls);
db.Halls.belongsTo(db.Fields);

db.Historicals_sports_prices.hasMany(db.Sports);
db.Sports.belongsTo(db.Historicals_sports_prices);

db.Sports.hasMany(db.Subscriptions);
db.Subscriptions.belongsTo(db.Sports);

db.Closes.hasMany(db.Sports_fields);
db.Sports_fields.belongsTo(db.Closes);

db.Events.hasMany(db.Users);
db.Users.belongsTo(db.Events);

module.exports = db;
