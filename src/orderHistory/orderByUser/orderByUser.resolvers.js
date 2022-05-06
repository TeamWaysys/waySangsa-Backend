import client from "../../client";

export default {
    Query:{
        orderByUser:(_, {orderUser}) => client.orderHistory.findUnique({
            where: {
                orderUser,
            }
        })
    },
};