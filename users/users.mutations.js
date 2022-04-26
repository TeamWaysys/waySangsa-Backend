import bcrypt from "bcrypt";
import client from "../client"
import jwt from "jsonwebtoken";
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
                return client.user.create({
                    data:{
                        userName,
                        phoneNumber,
                        organization,
                        email,
                        password:uglyPassword,
                    }
                })
            }catch(e){
                return e;
            }
            //save and return the user

        },
        login: async(_, {
            email,
            password
        }) =>{
            const user = await client.user.findFirst({where:{email}})
            if(!user) {
                return {
                    ok:false,
                    error: "User not found.",
                };
            }
            const passwordOk = await bcrypt.compare(password, user.password);
            if(!passwordOk){
                return {
                    ok:false,
                    error:"Incorrect password."
                }
            }
            const token = await jwt.sign({id:user.id}, process.env.SECRET_KEY);
            return {
                ok:true,
                token,
            }
        },
    },
}