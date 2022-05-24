const closeModel = (sequelize, DataTypes) => {
    const Close = sequelize.define('close', {
        start_date : {
            type : DataTypes.DATEONLY,
            allowNull : false
        },
        end_date : {
            type : DataTypes.DATEONLY,
            allowNull : false
        }
    }, {timestamps: false});
    return Close
}

module.exports = closeModel;