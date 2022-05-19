
const reservationsModel = (sequelize, DataTypes) => {
    const reservations = sequelize.define('reservation', {
        label : {
            type: DataTypes.STRING,
            allowNull: false
        },
        start_date_reservation : {
            type : DataTypes.DATE,
            allowNull : false
        },
        end_date_reservation : {
            type : DataTypes.DATE,
            allowNull : false
        },
        price : {
            type : DataTypes.DECIMAL(15,2),
            allowNull:false
        },
        tva : {
            type : DataTypes.DECIMAL(15,2),
            allowNull:false
        },
        statut : {
            type : DataTypes.ENUM('1','2','3'),
            allowNull : false
        }
    }, {timestamps: false});
    return reservations
}

module.exports = reservationsModel;