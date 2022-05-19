
const subscriptionsModel = (sequelize, DataTypes) => {
    const Subscriptions = sequelize.define('subscription', {
        label : {
            type: DataTypes.STRING,
            allowNull: false
        },
        token : {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {timestamps: false});
    return Subscriptions
}

module.exports = subscriptionsModel;