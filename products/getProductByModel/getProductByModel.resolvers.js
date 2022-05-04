import client from "../../client";

export default {
    Query:{
        getProductByModel:(_, {productModelNo}) => client.product.findUnique({
            where: {
                productModelNo,
            }
        })
    },
};