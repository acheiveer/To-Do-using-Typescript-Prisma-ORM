import zod from "zod";

export const RegisterSchema = zod.object({
    username: zod.string(),
    password: zod.string().min(6,{ message: "Must be 6 or more characters long" }),
    firstname: zod.string(),
    lastname: zod.string(),
    email: zod.string().email({ message: "Invalid email address" }),

})