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

    const isAdmin = async (req, res) => {
        try {
            const isAdmin = await userController.isAdmin(req.body.id);
            return res.status(200).json({
                data: isAdmin,
                success: true,
                message: 'successfully checked user is admin',
                error:{}
            })
        } catch (error) {
            return res.status(500).json({ 
                data:{},
                success: false,
                message: 'failed to check IsAdmin or not',
                error: error
            });
        }
    }

    const isAuthority = async (req, res) => {
        try {
            const isAuthorityRole = await userController.isAuthority(req.body.id);
            return res.status(200).json({
                data: isAuthorityRole,
                success: true,
                message: 'successfully checked user is a part of authority or not',
                error:{}
            })
        } catch (error) {
            return res.status(500).json({ 
                data:{},
                success: false,
                message: 'failed to check IsAdmin or not',
                error: error
            });
        }
    }


module.exports = {
    signUp,
    signIn,
    isAuthenticated,
    isAdmin,
    isAuthority
}