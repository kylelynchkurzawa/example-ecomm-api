'use strict';

const fs        = require('fs');
const path      = require('path');
const basename  = path.basename(__filename);
let Sequelize   = require('sequelize');
let db          = {};

//create the Sequelize database connection
const sequelize = new Sequelize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_password, {
    host: CONFIG.db_host,
    dialect: CONFIG.db_dialect,
    port: CONFIG.db_port,
    operatorsAliases: '0'
});

//use fs to read the files of every file in the directory supplied as an argument
//the directory we provide is the current one we are in
fs.readdirSync(__dirname).filter(file => {
    //for each file we read, check for if
    //* it doesn't have an extension
    //* extension is NOT '.js'
    //* the name of the file is NOT this file we are currently in
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach(file => {
    //for each file we have
    //use sequelize to import the model from the models directory
    let model = sequelize['import'](path.join(__dirname, file));
    //then assign it to our 'db object', which will contain each of our models
    db[model.name] = model;
});

//loop over each key, therefore each model, in our db object
Object.keys(db).forEach(modelName => {
    //if the model has an associate function
    if (db[modelName]?.associate) {
        //run it passing in the db object so it has access to all the other models
        db[modelName].associate(db);
    }
});

//assign the sequelize connection and module to our db object, so we always have convenient access to them
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
