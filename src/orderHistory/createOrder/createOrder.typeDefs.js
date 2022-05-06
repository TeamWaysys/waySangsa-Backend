import { gql } from "apollo-server";


export default gql`
    type Mutation{
        createOrder(
            orderUserID:String!
            orderCompany:String
            deliveryDate:String
            orderSiteAddr:String
            siteChiefName:String
            siteChiefPhoneNum:String
            siteChiefEmail;String
            orderList:String!
        ):orderHistory!
    }
`