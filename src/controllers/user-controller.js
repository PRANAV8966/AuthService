const  userService  = require("../services/user-service");

const userController = new userService();

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

    const signIn = async (req, res) => {
        try {
            const response = await userController.signIn(req.body.email, req.body.password);
            return res.status(201).json({
                data: response,
                success: true,
                message: 'signed-in successfully',
                error:{}
            });
        } catch (error) {
            return res.status(500).json({ 
                data:{},
                success: false,
                message: 'failed to log-In',
                error: error
            });
        }
    }

    const isAuthenticated = async (req, res) => {
        try {
            const isValid = await userController.isAuthenticated(req.headers['x-access-token']);
            return res.status(200).json({
                data: isValid,
                success: true,
                message: 'token is valid and user is authenticated',
                error:{}
            })
        } catch (error) {
            return res.status(500).json({ 
                data:{},
                success: false,
                message: 'Invlaid token',
                error: error
            });
        }
    }


module.exports = {
    signUp,
    signIn,
    isAuthenticated
}