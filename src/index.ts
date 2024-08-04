import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import express from "express";
import zod from "zod";
import cors from "cors";
import apiRoute,{apiPtotectedRoute} from "./Routes/api";
import AuthMiddleware from "./middlewares/AuthMiddlewares";


const app = express();
app.use(cors());
app.use(express.json());
const PORT=3000;

app.use("/api/",apiRoute);
app.use("/api/",AuthMiddleware,apiPtotectedRoute);


app.listen(PORT,()=>{
    console.log("server is running");
})
