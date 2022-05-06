import { gql } from "apollo-server"

export default gql` 
type CreateAccountResult{
    ok: Boolean!
    error: String
  }
type Mutation{  
    createAccount(
        userName:String!
        phoneNumber:String!
        organization:String!
        email:String!
        password:String!
        ):CreateAccountResult!
}`;