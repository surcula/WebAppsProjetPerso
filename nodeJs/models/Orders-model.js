
const ordersModel = (sequelize, DataTypes) => {
    const Orders = sequelize.define('order', {
        date_order : {
            type: DataTypes.DATE,
            allowNull: false
        },
        total_price :{
            type : DataTypes.DECIMAL(15,2),
            allowNull : false
        },
        tva : {
            type : DataTypes.DECIMAL(15,2),
            allowNull:false
        }
    }, {timestamps: false});
    return Orders
}

module.exports = ordersModel;