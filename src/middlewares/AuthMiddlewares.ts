import { JWT_TOKEN_SECRET } from "../utils/constants";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

// Extend the Request interface to include userId
declare module 'express-serve-static-core' {
    interface Request {
        userId?: string;
    }
}

interface DecodedToken {
    userId: string;
}

const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            message: "Token is missing in header"
        });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_TOKEN_SECRET) as DecodedToken;
        console.log(decoded);
        if (decoded.userId) {
            req.userId = decoded.userId;
            next();
        } else {
            return res.status(403).json({
                message: "Invalid token"
            });
        }
    } catch (error) {
        return res.status(403).json({
            message: "Token verification unsuccessful"
        });
    }
};

export default AuthMiddleware;
