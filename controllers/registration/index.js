const { success, error } = require('../../response/macros');
const user = require('../../models').user;
const { hashPassword } = require('../helper')

exports.registration = async(req, res)=>{
    try {
        const rb = req.payload;

        let password = await hashPassword(rb.password)

        let emailExists = await user.findOne({
            where:{
                email: rb.eamil
            },attributes: ['id']
        })

        if(emailExists){

            return success({error: 'Email already exists'})(res)

        }

        let mobileExists = await user.findOne({
            where:{
                email: rb.mobile_no
            },attributes: ['id']
        })

        if(mobileExists){

            return success({error:'Mobile number already exists'})(res)

        }
        

        let create = await user.create({
            first_name: rb.first_name,
            last_name: rb.last_name,
            email: rb.email,
            password: password,
            mobile_no: rb.mobile_no
        })

        return success(create,'User created successfully')(res);
        
    } catch (err) {
        console.log(err)
        return error(err.message)(res)
    }
}