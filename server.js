require('dotenv').config
// import dotenv from "dotenv"
// import { PrismaClient } from "@prisma/client";
import express from "express"
import { ApolloServer } from "apollo-server-express";
import {typeDefs,resolvers} from "./schema";
import {getUser} from "./users/users.utils.js";
import { graphqlUploadExpress } from "graphql-upload";

const startServer = async () => {
const PORT = process.env.PORT
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
        return {
            loggedInUser:await getUser(req.headers.token),
          };
      },
});

await server.start();
const app = express();
app.use(graphqlUploadExpress());
server.applyMiddleware({ app });
await new Promise((func) => app.listen({ port: PORT }, func));
console.log(`🚀 Server: http://localhost:${PORT}${server.graphqlPath}`);

// server.listen().then(()=> console.log(`Server is running on http://localhost:4000/`))
}
startServer();
