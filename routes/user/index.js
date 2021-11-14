const Joi = require('joi');

const { registration } = require('../../controllers/registration');

const { loginUser } = require('../../controllers/auth');

const { userDetails } = require('../../controllers/user');

const router = [
    {
        path: '/user-registration',
        method: 'post',
        options: {
            handler: registration,
            description: 'Registration of an user with basic infos',
            notes: 'User registration',
            tags: ['api'],
            auth: false,
            validate: {
                payload: Joi.object({
                    first_name:  Joi.string().required(),
                    last_name:  Joi.string().required(),
                    email:  Joi.string().email().required(),
                    password: Joi.string().required(),
                    mobile_no: Joi.number().integer().min(10**9).max(10**10 - 1).required()
                })
            }
        }
    },{
        path: '/user-login',
        method: 'post',
        options: {
            handler: loginUser,
            description: 'Login of an user with basic infos',
            notes: 'User login',
            tags: ['api'],
            auth: false,
            validate: {
                payload: Joi.object({
                    email:  Joi.string().email().required(),
                    password: Joi.string().required()
                })
            }
        }
    },{
        path: '/user-details',
        method: 'get',
        options: {
            handler: userDetails,
            description: 'User details of a logged in user',
            notes: 'User details',
            tags: ['api'],
            //auth: false, 
            /*this route should be under authorization ,we can also write auth: 'jwt' for better understanding */
        }
    }
]

module.exports = router;