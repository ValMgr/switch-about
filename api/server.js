const express = require('express');
const app = express();

const dbConfig = require("./config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

let isConnected = false;
sequelize.authenticate()
.then(() => {
  isConnected = true;
  console.log('Connection has been established successfully.');
})
.catch(err => {
  isConnected = false;
  console.error('Unable to connect to the database:', err);
});

app.get('/', (req, res) => {
  res.send('DB is connected: ' + isConnected);
});

const PORT = process.env.NODE_DOCKER_PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});