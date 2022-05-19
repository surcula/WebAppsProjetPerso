
const authorizationsModel = (sequelize, DataTypes) => {
    const Authorization = sequelize.define('authorization', {
        label : {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false});
    return Authorization
}

module.exports = authorizationsModel;