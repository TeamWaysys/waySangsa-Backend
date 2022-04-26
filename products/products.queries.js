import client from "../client";

export default {
    Query:{
        getProductByModel:(_, {productModelNo}) => client.product.findUnique({
            where: {
                productModelNo,
            }
        }),
        getProductByType:(_, {productType}) => client.product.findMany({
            where: {
                productType,
            }
        })
    },
};