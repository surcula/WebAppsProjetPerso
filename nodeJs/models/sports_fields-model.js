const sport_fieldModel = (sequelize, DataTypes) => {
    const Sport_field = sequelize.define('sports_field', {
        sportId : {
            type: DataTypes.INTEGER,
            references:{
                model : 'sports',
                key : 'id'
            }
        },
        fieldId : {
            type: DataTypes.INTEGER,
            references:{
                model : 'fields',
                key : 'id'
            }
        }
    }, {timestamps: false});
    return Sport_field
}

module.exports = sport_fieldModel;