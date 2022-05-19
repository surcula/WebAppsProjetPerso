
const hallModel = (sequelize, DataTypes) => {
    const Hall = sequelize.define('hall', {
        label : {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false});
    return Hall
}

module.exports = hallModel;