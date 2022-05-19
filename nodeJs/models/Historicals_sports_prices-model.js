
const historical_sport_priceModel = (sequelize, DataTypes) => {
    const Historical_sport_price = sequelize.define('historicals_sports_price', {
        start_date : {
            type: DataTypes.DATEONLY,
            allowNull: false
        },       
        end_date : {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    }, {timestamps: false});
    return Historical_sport_price
}

module.exports = historical_sport_priceModel;