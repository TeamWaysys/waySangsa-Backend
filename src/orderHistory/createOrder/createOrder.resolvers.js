import client from "../../client"


export default {
    Mutation: {
        createOrder: async (_,
            {   orderUserID,
                orderCompany,
                deliveryDate,
                orderSiteAddr,
                siteChiefName,
                siteChiefPhoneNum,
                siteChiefEmail,
                orderList
        }) =>{
            try{
                return client.orderHistory.create({
                    data:{
                        orderUserID,
                        orderCompany,
                        deliveryDate,
                        orderSiteAddr,
                        siteChiefName,
                        siteChiefPhoneNum,
                        siteChiefEmail,
                        orderList
                    }
            })}
            catch(e){
                return e
            }
        }
    }
}