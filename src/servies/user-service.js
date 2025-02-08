const UserRepository   = require("../repositories/user-repository"); 

class userService {

    constructor() {
        this.userRepository = new UserRepository();
    }

    async signUp(data) {
        try {
            const newUser = await this.userRepository.create(data);
            return newUser;
        } catch (error) {
            console.log("something went wrong in the user service");
            throw error;
        }
    }
}

module.exports = userService;