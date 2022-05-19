
const cityModel = (sequelize, DataTypes) => {
    const City = sequelize.define('citie', {
        label : {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip_code : {
            type : DataTypes.INTEGER,
            allowNull : false
        }
    }, {timestamps: false});
    return City
}

module.exports = cityModel;