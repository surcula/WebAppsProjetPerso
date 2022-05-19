const countryModel = (sequelize, DataTypes) => {
    const Country = sequelize.define('countrie', {
        label : {
            type: DataTypes.STRING,
            allowNull: false
        },
        iso_alpha3 : {
            type : DataTypes.DECIMAL(3,0),
            allowNull : false
        }
    }, {timestamps: false});
    return Country
}

module.exports = countryModel;