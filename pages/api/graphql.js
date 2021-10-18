import { ApolloServer  } from "apollo-server-micro";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
// import { authMiddleware } from "../../utils/backendAuth";
import decode from 'jwt-decode';
import frontendAuth from "../../utils/frontendAuth";




const apolloServer = new ApolloServer({ typeDefs, resolvers, context: ({ req }) => {
    try{
       
        const token = req.cookies;
    // const decoded = decode(token);
    // const currentUser = decoded.data.username;
    // console.log(token)
} catch (e) {console.log(e)}
} });

export const config = { api: { bodyParser: false } };

export default  apolloServer.createHandler({ path: "/api/graphql" });