import express from "express";
import Register from "../controllers/Register.controller";
import Login from "../controllers/Login.controller";


const apiRoute = express.Router();
export const apiPtotectedRoute = express.Router();

apiRoute.post("/signup",Register);
apiRoute.post("/signin",Login);
apiPtotectedRoute.post("/createtodo",); // create routes for createTodo,updateTodo,getTodo,deleteTodo




export default apiRoute;