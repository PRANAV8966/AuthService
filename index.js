const express = require('express');
const app = express();

const { PORT } = require('./src/config/serverConfig');
const apiRoutes = require('./src/routes/index');

// const UserRepository = require('./src/repositories/user-repository');
// const userRepository = new UserRepository();

const startPrepareServer = async () => {

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`server started on ${PORT}`);
    });

    // const userDetails = await userRepository.getById(1);
    // console.log(userDetails);

    app.use('/api', apiRoutes);
}

startPrepareServer();