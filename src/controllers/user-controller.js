const  userService  = require("../services/user-service");
const {ServerErrCodes, SuccessCodes} = require('../utils/Errors/error-codes');

const userController = new userService();


    const signUp = async (req, res) => {
        try {
            const newUser = await userController.signUp(req.body);
            return res.status(SuccessCodes.CREATED).json({
                data: newUser,
                success: true,
                message: 'user created successfully',
                error:{}
            });
        } catch (error) {
            return res.status(error.statusCode).json({ 
                data:{},
                success: false,
                message: error.message,
                error: error.explanation
            });
        }
    }

    const signIn = async (req, res) => {
        try {
            const response = await userController.signIn(req.body.email, req.body.password);
            return res.status(SuccessCodes.OK).json({
                data: response,
                success: true,
                message: 'signed-in successfully',
                error:{}
            });
        } catch (error) {
            return res.status(error.statusCode).json({ 
                data:{},
                success: false,
                message: error.message,
                error: error.explanation
            });
        }
    }

    const isAuthenticated = async (req, res) => {
        try {
            const isValid = await userController.isAuthenticated(req.headers['x-access-token']);
            return res.status(SuccessCodes.OK).json({
                data: isValid,
                success: true,
                message: 'token is valid and user is authenticated',
                error:{}
            })
        } catch (error) {
            return res.status(ServerErrCodes.INTERNAL_SERVER_ERROR).json({ 
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
            return res.status(SuccessCodes.OK).json({
                data: isAdmin,
                success: true,
                message: 'successfully checked user is admin',
                error:{}
            })
        } catch (error) {
            return res.status(ServerErrCodes.INTERNAL_SERVER_ERROR).json({ 
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
            return res.status(SuccessCodes.OK).json({
                data: isAuthorityRole,
                success: true,
                message: 'successfully checked user is a part of authority or not',
                error:{}
            })
        } catch (error) {
            return res.status(ServerErrCodes.INTERNAL_SERVER_ERROR).json({ 
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