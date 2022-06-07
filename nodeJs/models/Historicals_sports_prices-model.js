
const historical_sport_priceModel = (sequelize, DataTypes) => {
    const Historical_sport_price = sequelize.define('historicals_sports_price', {
        begin_date : {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        price :{
            type : DataTypes.DECIMAL(10,2),
            allowNull : false
        }
    }, {timestamps: false});
    return Historical_sport_price
}

module.exports = historical_sport_priceModel;