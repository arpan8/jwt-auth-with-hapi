const Joi = require('joi');

const { registration } = require('../../controllers/registration');

const { loginUser } = require('../../controllers/auth');

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
    }
]

module.exports = router;