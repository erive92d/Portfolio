const sequelize = require('../config/connection');
// const Projects = require("../models")
const Projects= require('../models/Projects')


const projectData = require("./projectData.json")

const seedDatabase = async () => {
  await sequelize.sync({ force: true });


  await Projects.bulkCreate(projectData)

  process.exit(0);
};

seedDatabase();
