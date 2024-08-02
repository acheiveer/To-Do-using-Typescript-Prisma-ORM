import zod from "zod";

export const LoginSchema = zod.object({
    username: zod.string(),
    password: zod.string().min(6,{ message: "Must be 6 or more characters long" }),

})