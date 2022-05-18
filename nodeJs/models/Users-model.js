
const usersModel = (sequelize, DataTypes) => {
    const Users = sequelize.define('user', {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Users
}

module.exports = usersModel;