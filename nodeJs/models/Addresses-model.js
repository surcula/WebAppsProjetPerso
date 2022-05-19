
const addresseModel = (sequelize, DataTypes) => {
    const Addresse = sequelize.define('addresse', {
        street_name : {
            type: DataTypes.STRING,
            allowNull: false
        },
        street_number : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        box_number : {
            type : DataTypes.DECIMAL(15,2),
            allowNull : false
        }
    }, {timestamps: false} );
    return Addresse
}

module.exports = addresseModel;