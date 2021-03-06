require("dotenv").config();
import { ApolloServer } from "apollo-server";

import { getUser } from "./users/users.utils";
import { typeDefs, resolvers } from "./schema";

const PORT = process.env.PORT;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground:true,
    introspection :true,
    context: async ({ req }) => {
        return {
        loggedInUser: await getUser(req.headers.token),
        };
  },
});
server
  .listen(PORT)
  .then(() =>
    console.log(`🚀Server is running on http://localhost:${PORT} ✅`)
  );