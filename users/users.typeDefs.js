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
    type CreateAccountResult {
        ok: Boolean!
        error: String
      }
    type LoginResult {
        ok:Boolean!
        token:String
        error:String
    }
    
    type Mutation{
        createAccount(
            userName:String!
            phoneNumber:String!
            organization:String!
            email:String!
            password:String!
            ):CreateAccountResult!

        login(email:String!, password:String!):LoginResult!
        
    }

    type Query{ 
        seeProfile(email:String!):User
    }
`
