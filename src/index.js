const express = require('express');
const { serverConfig } = require('./config');
const { emailService } = require('./services');
const setUpAndStartServer = () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.listen(serverConfig.PORT, () => {
        console.log(`server started at PORT: ${serverConfig.PORT}`)
        // emailService.sendMail();

    });
}

setUpAndStartServer();