import { gql } from "apollo-server";

export default gql`
    type Query{ 
        findEmail(name:String!,phoneNumber:String!):User
    }
`