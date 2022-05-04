import { gql } from "apollo-server";


export default gql`
    type orderHistory {
        id:String!
        orderUser:String!
        orderSiteAddr:String!
        siteChiefName:String!
        siteChiefPhoneNum:String!
        siteChiefEmail:String!
        orderWantDate:String!
        orderList:String!
        createdAt:String!
        updatedAt:String!
    }
`