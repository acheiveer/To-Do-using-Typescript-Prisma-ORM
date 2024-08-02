# To-Do App

A simple To-Do application built with TypeScript, Prisma ORM, PostgreSQL, Node.js, Express, Zod for validation, and React for the frontend.

## Prerequisites

- Node.js
- npm
- PostgreSQL

## Getting Started

### Initialize the Project

1. Initialize an empty Node.js project:
    ```bash
    npm init -y
    ```

2. Add dependencies for Express:
    ```bash
    npm install express @types/express --save-dev
    ```

3. Add TypeScript and related dependencies:
    ```bash
    npm install typescript ts-node @types/node --save-dev
    ```
    - **TypeScript**: TypeScript compiler to compile .ts files to JavaScript.
    - **ts-node**: Allows running TypeScript code directly without needing to precompile it to JavaScript.
    - **@types/node**: Provides type definitions for Node.js, enabling TypeScript to understand Node.js built-in modules and APIs.

4. Initialize TypeScript:
    ```bash
    npx tsc --init
    ```
    - This command creates a `tsconfig.json` file. Modify it as follows:
      ```json
      {
        "compilerOptions": {
          "rootDir": "./src",
          "outDir": "./dist"
        }
      }
      ```

### Initialize Prisma

5. Initialize a fresh Prisma project:
    ```bash
    npx prisma init
    ```
    - This command sets up Prisma and creates a new Prisma project with a `prisma` folder containing `schema.prisma`, and adds the necessary dependencies to your `package.json`.

### Setting Up the Database

6. Configure your PostgreSQL database connection in the `.env` file created by Prisma:
    ```env
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    ```
7. **Define your data models in the `schema.prisma` file, and run the following commands to generate the Prisma Client and migrations:**

    - **Generate Migrations:** 
      ```bash
      npx prisma migrate dev --name Initialize_the_schema
      ```
      This will create migration files and apply them to your database. 'Initialize_the_schema' is the name of the migration.

    - **Generate Prisma clients:**
      ```bash
      npx prisma generate
      ```
      This generates a new client for you, which you can use in your Node.js app.




### Backend Setup

1. **Add Backend Dependencies:**

    - **CORS (Cross-Origin Resource Sharing):**
      ```bash
      npm install cors @types/cors
      ```

    - **Zod for Validation:**
      ```bash
      npm install zod
      ```

    - **Bcrypt for Password Encryption and Decryption:**
      ```bash
      npm install bcrypt @types/bcrypt
      ```

    - **JSON Web Token (JWT) for Authentication:**
      ```bash
      npm install jsonwebtoken @types/jsonwebtoken
      ```