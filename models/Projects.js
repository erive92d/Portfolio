const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Projects extends Model {}

Projects.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    project_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image_src: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
        type: DataTypes.STRING,
        allowNull:false
    }
   
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Projects;
