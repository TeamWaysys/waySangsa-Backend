import { gql } from "apollo-server";


export default gql`
    type Mutation{
        createOrder(
            orderUser:String!
            orderSiteAddr:String!
            siteChiefName:String!
            siteChiefPhoneNum:String!
            siteChiefEmail:String!
            orderWantDate:String!
            orderList:String!
        ):orderHistory!
    }
`