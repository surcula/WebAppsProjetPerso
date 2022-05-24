const countryModel = (sequelize, DataTypes) => {
    const Country = sequelize.define('countrie', {
        label : {
            type: DataTypes.STRING,
            allowNull: false
        },
        iso_alpha3 : {
            type : DataTypes.STRING,
            allowNull : false
        }
    }, {timestamps: false});
    return Country
}

module.exports = countryModel;