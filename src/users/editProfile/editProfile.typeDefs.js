import { gql } from "apollo-server";

export default gql`
    type EditProfileResult {
        ok:Boolean!
        error:String
    }
    type Mutation {
        editProfile(
            userName:String
            phoneNumber:String
            organization:String
            email:String
            password:String
        ):EditProfileResult!
    }
  
`;