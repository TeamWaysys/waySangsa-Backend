import client from "../../client";

export default {
    Query:{
        orderByUser:(_, {orderUserID}) => client.orderHistory.findUnique({
            where: {
                orderUserID,
            }
        })
    },
};