import client from "../client"


export default {
    Mutation: {
        createOrder: async (_,
            {orderUser,
            orderSiteAddr,
            siteChiefName,
            siteChiefPhoneNum,
            siteChiefEmail,
            orderWantDate,
            orderList
        }) =>{
            try{
                return client.orderHistory.create({
                    data:{
                        orderUser,
                        orderSiteAddr,
                        siteChiefName,
                        siteChiefPhoneNum,
                        siteChiefEmail,
                        orderWantDate,
                        orderList
                    }
            })}
            catch(e){
                return e
            }
        }
    }
}