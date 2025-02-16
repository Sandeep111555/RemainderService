'use strict';
const {
  Model
} = require('sequelize');
const {enums} = require('../utils/index');
const BOOKING_ENUMS = enums.BOOKING_STATUS;
module.exports = (sequelize, DataTypes) => {
  class NotificationTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NotificationTicket.init({
    subject: {
      type:DataTypes.STRING,
      allowNull:false
    },
    recepient:{
      type:DataTypes.STRING,
      allowNull:false
    },
    content:{
      type:DataTypes.STRING,
      allowNull:false
    }, 
    status: {
      type:DataTypes.ENUM,
      allowNull:false,
      values:[BOOKING_ENUMS.INITIATED,BOOKING_ENUMS.PENDING,BOOKING_ENUMS.BOOKED,BOOKING_ENUMS.CANCELLED]
    },
    notificationTime: {
      type:DataTypes.DATE,
      allowNull:false
    },
    }, {
    sequelize,
    modelName: 'NotificationTicket',
  });
  return NotificationTicket;
};