import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { RegisterSchema } from "../validations/RegisterSchema";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { JWT_TOKEN_SECRET } from "../utils/constants";


const Register = async (req: Request,res: Response)=>{
    const body = req.body;
    const obj = RegisterSchema.safeParse(req.body);
    if(!obj.success){
        return res.json({
            message: " Incorrect Inputs! "
        })
    }
    const user = await prisma.user.findFirst({
        where: {
            OR: [
                { username: body.username },
                { email: body.email }
            ]
        }
    })

    if(user){
        return res.json({
            message: "username/Email is already taken"
        })
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(body.password,salt);

    // Save to DB

    try {
        const dbUser = await prisma.user.create({
            data: {
                username:body.username,
                password: hashPassword,
                firstname: body.firstname,
                lastname: body.lastname,
                email: body.email
            }
        })

        const token = jwt.sign({userId: dbUser.id},JWT_TOKEN_SECRET);
        res.json({
            userId: dbUser.id,
            message:"user created successfully",
            token: token
        })
    } catch (error) {
        console.log(error);
    }



}

export default Register;