const user_subscriptionsModel = (sequelize, DataTypes) => {
    const User_subscriptions = sequelize.define('users_subscription', {
        userId : {
            type: DataTypes.INTEGER,
            references:{
                model : 'users',
                key : 'id'
            }
        },
        subscriptionId : {
            type: DataTypes.INTEGER,
            references:{
                model : 'subscriptions',
                key : 'id'
            }
        },
        start_date : {
            type : DataTypes.DATEONLY,
            allowNull : false
        },
        end_date : {
            type : DataTypes.DATEONLY,
            allowNull : false
        }
    }, {timestamps: false});
    return User_subscriptions
}

module.exports = user_subscriptionsModel;