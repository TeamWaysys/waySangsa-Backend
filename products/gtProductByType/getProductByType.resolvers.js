import client from "../../client";

export default {
    Query:{
        getProductByType:(_, {productType}) => client.product.findMany({
            where: {
                productType,
            }
        })
    },
};