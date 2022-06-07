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
        },
        start_time : {
            type: DataTypes.DATE,
            allowNull : false
        },
        end_time : {
            type: DataTypes.DATE,
            allowNull : false
        },
        date_start : {
            type: DataTypes.DATE,
            allowNull : false
        },
        day : {
            type: DataTypes.INTEGER,
            allowNull : false
        }
    }, {timestamps: false});
    return Sport_field
}

module.exports = sport_fieldModel;