import { gql } from "apollo-server";


export default gql`
    type Query {
        orderByUser(orderUser:String!):orderHistory!
    }
`