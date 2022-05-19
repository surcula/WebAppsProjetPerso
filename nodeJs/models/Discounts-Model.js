
const discountModel = (sequelize, DataTypes) => {
    const Discount = sequelize.define('discount', {
        label : {
            type: DataTypes.STRING,
            allowNull: false
        },
        percent : {
            type : DataTypes.DECIMAL(15,2),
            allowNull : false
        }
    }, {timestamps: false});
    return Discount
}

module.exports = discountModel;