const dotEnv = require('dotenv');
dotEnv.config(); //loads env variables from .env file to process.env
module.exports = {
    PORT:process.env.PORT
};
