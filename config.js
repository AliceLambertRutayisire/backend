require("dotenv").config();
const config = {};

config.development = {
  name: "development",
  httpPort: 8080,
  httpsPort: 8081,

  
};

config.production = {
  name: "a reddit clone",
  httpPort: 8080,
  httpsPort: 443,
  database: process.env.DATABASE,
  secret:"super tired"
  
};


// Change before deploying
const envToExport = config.production;

module.exports = envToExport;
