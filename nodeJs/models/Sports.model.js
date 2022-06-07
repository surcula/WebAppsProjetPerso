const sportModel = (sequelize, DataTypes) => {
    const Sport = sequelize.define('sport', {
       label : {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false});
    return Sport
}

module.exports = sportModel;