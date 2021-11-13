const Joi = require('joi');
const { registration } = require('../../controllers/registration');

const router = [
    {
        path: '/user-registration',
        method: 'post',
        options: {
            handler: registration,
            description: 'Registration of an user with basic infos',
            notes: 'User registration',
            tags: ['api'],
            validate: {
                payload: Joi.object({
                    first_name:  Joi.string().required(),
                    last_name:  Joi.string().required(),
                    email:  Joi.string().email().required(),
                    password: Joi.string().required(),
                    mobile_no: Joi.number().integer().min(10**9).max(10**10 - 1).required()
                })
                //.options({abortEarly : false})
            }
        }
    }
]

module.exports = router;