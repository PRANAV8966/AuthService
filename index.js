const express = require('express');
const app = express();

const { PORT } = require('./src/config/serverConfig');
const apiRoutes = require('./src/routes/index');

const startPrepareServer = async () => {

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`server started on ${PORT}`);
    });

    app.use('/api', apiRoutes);

}

startPrepareServer();