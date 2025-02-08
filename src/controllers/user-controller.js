const  userService  = require("../servies/user-service");

userController = new userService();

    const signUp = async (req, res) => {
        try {
            const newUser = await userController.signUp(req.body);
            return res.status(201).json({
                data: newUser,
                success: true,
                message: 'user created successfully',
                error:{}
            });
        } catch (error) {
            return res.status(500).json({ 
                data:{},
                success: false,
                message: 'something went wrong in the controller layer',
                error: error
            });
        }
    }


module.exports = {
    signUp,
}