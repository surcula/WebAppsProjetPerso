
const eventModel = (sequelize, DataTypes) => {
    const Event = sequelize.define('event', {
        label : {
            type: DataTypes.STRING,
            allowNull: false
        },
        begin_date_hour : {
            type : DataTypes.DATEONLY,
            allowNull : false
        },
        end_date_hour : {
            type : DataTypes.DATEONLY,
            allowNull : false
        },
        info : {
            type : DataTypes.STRING,
            allowNull : false
        },
        picture : {
            type : DataTypes.BLOB,
            allowNull : false
        }
    }, {timestamps: false});
    return Event
}

module.exports = eventModel;