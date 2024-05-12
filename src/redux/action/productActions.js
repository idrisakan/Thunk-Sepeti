import api from "../../utils/api";
import ActionTypes from "../actionTypes";

//id den yolla çıkarak hem restoranın hemde restoranın ürünlerinin verilerini api den alıp reducer a aktarılacak bir asekron thunk aksiyonu yazalım.

export const getDataByRestId =(id) => async (dispatch) => {
//reducer a yüklemenin başaldığını bildir
dispatch({ type: ActionTypes.PROD_LOADING})

    //Restaurant bilgilerini verir
   const req1 = api.get(`/restaurants/${id}`);
    // restaurantın ürünlerinin verisi

    const req2 = api.get(`/products?restaurantId=${id}`)
try {
    // iki farklı api isteğini aynı anda atarsak kullanıcıya veriyi daha hızlı yansıtabiliriz.bunun için promise.all kullandık
    const responses = await Promise.all([req1, req2]);

    //api den veriler başarıyla gelirse tetiklenek aksiyon
    dispatch({ type:ActionTypes.PROD_SUCCES, payload:responses})
} catch(err) {
    //aapiden veriler gelmezse hata mesajını reducera aktar
    dispatch({ type: ActionTypes.PROD_ERROR, payload:err.message})
}
;}