
const rolesModel = (sequelize, DataTypes) => {
    const Roles = sequelize.define('role', {
        label : {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false});
    return Roles
}

module.exports = rolesModel;