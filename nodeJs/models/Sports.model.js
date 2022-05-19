const sportModel = (sequelize, DataTypes) => {
    const Sport = sequelize.define('sport', {
       label : {
            type: DataTypes.STRING,
            allowNull: false
        },
        price : {
            type : DataTypes.DECIMAL(15,2),
            allowNull : false
        }
    }, {timestamps: false});
    return Sport
}

module.exports = sportModel;