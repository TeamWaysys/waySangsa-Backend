import { gql } from "apollo-server";


export default gql`

type Query {
    getProductByType(productType:String!):[Product!]
}
`