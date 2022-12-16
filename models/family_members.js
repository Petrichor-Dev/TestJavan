'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class family_members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  family_members.init({
    nama: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'family_members',
  });
  return family_members;
};