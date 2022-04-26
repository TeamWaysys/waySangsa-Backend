require('dotenv').config
// import dotenv from "dotenv"
// import { PrismaClient } from "@prisma/client";
import {ApolloServer, gql} from "apollo-server";
import schema from "./schema";


const server = new ApolloServer({
    schema
});

const PORT = process.env.PORT

server.listen().then(()=> console.log(`Server is running on http://localhost:${PORT}/`))