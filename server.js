require('dotenv').config
// import dotenv from "dotenv"
// import { PrismaClient } from "@prisma/client";
import {ApolloServer, gql} from "apollo-server";
import schema from "./schema";

const PORT = process.env.PORT
const server = new ApolloServer({
    schema
});



server.listen().then(()=> console.log(`Server is running on http://localhost:${PORT}/`))
// server.listen().then(()=> console.log(`Server is running on http://localhost:4000/`))
