
const fieldModel = (sequelize, DataTypes) => {
    const Field = sequelize.define('field', {
        label : {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false});
    return Field
}

module.exports = fieldModel;