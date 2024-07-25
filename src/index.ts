import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function createTodo(userId:number,title:string,description:string) {
//     const todo = await prisma.todo.create({
//         data:{
//         title,
//         description,
//         userId
//         },
//     })
//     console.log(todo);
// };

// createTodo(1, "go to gym", "go to gym and do 10 pushups");

// async function createUser(username:string,password:string, firstname:string,email:string) {
//     const user = await prisma.user.create({
//         data:{
//             username,
//             password,
//             firstname,
//             email
//         }
//     })
//     console.log(user);
// }
// createUser("pkumar1","password1","prabhakar","xyz1@gmail");
