const { success, error } = require('../../response/macros');
const user = require('../../models').user;
const { hashPassword } = require('../helper')

exports.registration = async(req, res)=>{
    try {
        const rb = req.payload;


        let emailExists = await user.findOne({
            where:{
                email: rb.email
            },attributes: ['id']
        })

        if(emailExists){

            return success({error: 'Email already exists'})(res)

        }

        let mobileExists = await user.findOne({
            where:{
                mobile_number: rb.mobile_number
            },attributes: ['id']
        })

        if(mobileExists){

            return success({error:'Mobile number already exists'})(res)

        }
        
        let password = await hashPassword(rb.password)

        let create = await user.create({
            first_name: rb.first_name,
            last_name: rb.last_name,
            email: rb.email,
            password: password,
            mobile_number: rb.mobile_number
        })

        return success(create,'User created successfully')(res);
        
    } catch (err) {
        console.log(err)
        return error(err.message)(res)
    }
}