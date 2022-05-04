import { gql } from "apollo-server";

export default gql`
    type User{
        id:String!
        userName:String!
        phoneNumber:String!
        organization:String!
        email:String!
        createdAt:String!
        updatedAt:String!
    }

`
