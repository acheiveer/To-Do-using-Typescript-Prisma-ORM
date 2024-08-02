import express from "express";
import Register from "../controllers/Register.controller";



const apiRoute = express.Router();
export const apiPtotectedRoute = express.Router();

apiRoute.post("/signup",Register);
apiRoute.post("/signin",Login);




export default apiRoute;