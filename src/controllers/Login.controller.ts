import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { LoginSchema } from "../validations/LoginSchema";
import { Request,Response } from "express";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";
import { JWT_TOKEN_SECRET } from "../utils/constants";

const Login = async (req: Request, res: Response)=>{
    const body = req.body;
    const obj = LoginSchema.safeParse(req.body);
    if(!obj.success){
        return res.json({
            message: "Incorrect Input format"
        })
    }

    const user = await prisma.user.findUnique({
        where: {
            username: body.username
        }
    })
    if(!user){
        return res.json({
            message: "user not exist"
        })
    }
    try {
        const verified =  bcrypt.compareSync(body.password,user.password);

        if(!verified){
        return res.json({
            message: "username or Password is incorrect"
        })
      }
      const token = jwt.sign({
        userId: user.id
        },JWT_TOKEN_SECRET)
        res.json({
            message:"Successfully logged In",
            token: token
        })
        return;
    } catch (error) {
       console.log(error);
    }

}

export default Login;