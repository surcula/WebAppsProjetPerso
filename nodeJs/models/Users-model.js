
const usersModel = (sequelize, DataTypes) => {
    const Users = sequelize.define('user', {
        national_number : {
            type :DataTypes.INTEGER,
            allowNull:false
        },
        firstname : {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname : {
            type: DataTypes.STRING,
            allowNull: false
        },
        email : {
            type: DataTypes.STRING,
            allowNull: false
        },
        statut : {
            type: DataTypes.ENUM('1','2'), // 1 = ok et 2 = mauvais payeur
            allowNull: false
        },
        birthdate : {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        password : {
            type: DataTypes.STRING.BINARY,
            allowNull: false
        },
        phone : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        gender : {
            type : DataTypes.ENUM('M','F','Autre'),
            allowNull : false
        },
        civilite :{
            type : DataTypes.ENUM('M','Mme','Dr','Autre'),
            allowNull : false
        }
    }, {timestamps: false});
    return Users
}

module.exports = usersModel;