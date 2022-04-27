import { gql } from "apollo-server";


export default gql`
type Product{
    id:String!
    productType:String!
    productImg:String!
    productModelNo:String!
    productModelImg:String!
    productModelSize:String!
    createdAt:String!
    updatedAt:String!
}
type Query {
    getProductByModel(productModelNo:String!):Product!
    getProductByType(productType:String!):[Product!]
}
`