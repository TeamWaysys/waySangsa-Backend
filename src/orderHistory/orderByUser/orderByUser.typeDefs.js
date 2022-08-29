import { gql } from "apollo-server";


export default gql`
    type Query {
        orderByUser(orderUserID:String!):[orderHistory!]
    }
`