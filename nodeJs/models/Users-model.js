
const usersModel = (sequelize, DataTypes) => {
    const Users = sequelize.define('user', {
        national_number : {
            type :DataTypes.STRING.BINARY,
            allowNull:false
        },
        first_name : {
            type: DataTypes.STRING(90),
            allowNull: false
        },
        last_name : {
            type: DataTypes.STRING(90),
            allowNull: false
        },
        email : {
            type: DataTypes.STRING,
            unique : true,
            validate :{
                isEmail : true
            },            
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
            type: DataTypes.STRING(64),
            allowNull: false
        },
        phone : {
            type : DataTypes.STRING,
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