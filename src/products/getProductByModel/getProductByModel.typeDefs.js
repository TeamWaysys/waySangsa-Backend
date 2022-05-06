import { gql } from "apollo-server";


export default gql`

type Query {
    getProductByModel(productModelNo:String!):Product!
}
`