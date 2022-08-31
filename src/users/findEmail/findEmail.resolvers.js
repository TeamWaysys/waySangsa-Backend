import client from "../../client";

export default {
    Query:{
        findEmail:(_, {name, phoneNumber}) => client.user.findUnique({
            where: {name}&&{
              phoneNumber
            }
        })
    },
};