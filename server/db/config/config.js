if (process.env.NODE_ENV !== 'production') { require('dotenv').config(); }

module.exports = {
  "development": {
    "username": "postgres",
    "password": "Postgres@970729",
    "database": "Magic-Burger",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "dialectOptions": {
    }
    },
    "test": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": process.env.DB_HOST,
      "dialect": "postgres",
      "dialectOptions": {
        "ssl": {
          "require": true,
          "rejectUnauthorized": false
        }
      }
    },
    "production": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": process.env.DB_HOST,
      "dialect": "postgres",
      "dialectOptions": {
        "ssl": {
          "require": true,
          "rejectUnauthorized": false
        }
      }
    }
  }
