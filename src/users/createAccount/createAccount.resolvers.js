import bcrypt from "bcrypt";
import client from "../../client"
require('dotenv').config

export default {
    Mutation:{
        createAccount: async(
          _, {
            userName,
            phoneNumber,
            organization,
            email,
            password,
        })=>{
            //check is phoneNumber or email are already on DB
            try{
                const existingUser = await client.user.findFirst({
                    where:{
                        OR:[
                            {
                                phoneNumber,
                            },
                            {
                                email,
                            }
                        ],
                    }
                });
                if(existingUser) {
                    throw new Error("This phone number/email is already taken.")
                }
                //hash password
                const uglyPassword = await bcrypt.hash(password, 10);
                await client.user.create({
                    data:{
                        userName,
                        phoneNumber,
                        organization,
                        email,
                        password:uglyPassword,
                    }
                })
                return {
                    ok: true,
                  };
            }catch(e){
                return {
                    ok: false,
                    error: "Cant create account.",
                  };
            }
            //save and return the user

        }
    },
}