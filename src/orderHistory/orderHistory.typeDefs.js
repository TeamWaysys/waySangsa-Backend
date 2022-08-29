import { gql } from "apollo-server";


export default gql`
    type orderHistory {
        id:String!
        orderUserID:String
        orderCompany:String
        deliveryDate:String
        orderSiteAddr:String
        siteChiefName:String
        siteChiefPhoneNum:String
        siteChiefEmail:String
        orderList:String
        createdAt:String!
        updatedAt:String!
    }
`