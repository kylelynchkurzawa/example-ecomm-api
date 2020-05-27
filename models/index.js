'use strict';

const fs        = require('fs');
const path      = require('path');
const basename  = path.basename(__filename);
const env       = require('../config/env');
let Sequelize   = require('sequelize');
let db          = {};

//create the Sequelize database connection
const sequelize = new Sequelize(env.db_schema, env.db_user, env.db_password, {
    host: env.db_host,
    dialect: env.db_dialect,
    port: env.db_port,
    operatorsAliases: '0'
});

const init = function(){
    sequelize.authenticate().then(() => {
        console.log(`Connected to the database at: ${env.db_host}:${env.db_port}`);
        console.log(`Sequelize dialect: ${env.db_dialect}`);
        console.log(`Database schema connected to: ${env.db_schema}`);
        initializeModels();
    }).catch(error => {
        console.error(`Unable to connect to the database at: ${env.db_host}:${env.db_port}\n\n ${JSON.stringify(error, null, 4)}`);
    })
};

const initializeModels = function(){
    //use fs to read the files of every file in the directory supplied as an argument
    //the directory we provide is the current one we are in
    fs.readdirSync(__dirname).filter(file => {
        //for each file we read, check for if
        //* it doesn't have an extension
        //* extension is NOT '.js'
        //* the name of the file is NOT this file we are currently in
        return ((file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'));
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

    if(env.api_env === 'dev'){
        sequelize.sync();//creates table if they do not already exist
        // models.sequelize.sync({ force: true });//deletes all tables then recreates them useful for testing and development purposes
    }
    else if(env.api_env === 'prod'){
        sequelize.sync();//creates table if they do not already exist

        //insert other prod only steps here
    }
}

//make the init function available to the rest of the project
db.init = init;
//assign the sequelize connection and module to our db object, so we always have convenient access to them
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
