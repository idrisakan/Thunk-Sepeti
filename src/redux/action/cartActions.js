import { v4 } from "uuid";
import api from "../../utils/api";
import ActionTypes from "../actionTypes"
import { toast } from "react-toastify";


export const getCart = () => (dispatch) => {
dispatch({type: ActionTypes.CART_LOADING});

api
.get('/cart')
.then((res) => dispatch({type: ActionTypes.CART_SUCCES, payload: res.data}))
.catch((err) => dispatch({ type: ActionTypes.CART_ERROR, payload: err.message})
);
};
//2) Apı a ve reducer da tutulan state e yeni bir sepet elemanı ekler
export const addToBasket = (product, restName) => (dispatch) => {
console.log(product, restName)
//a) sepete eklenecek olan ürünün bilgilerini belirle
const newItem = {
    id:v4(),
    productId: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantName:restName,
    amount:1,
};
//b) elemanı api a kaydet
api
.post('/cart', newItem)

//c) api dan olumlu cevap gelirse reducer a haber ver ve bildirim gönder
.then(() => {
    dispatch({ type: ActionTypes.ADD_ITEM, payload: newItem});
toast.success(`${newItem.title}sepete eklendi`);
})
//d) api den hata gelirse bildirim gönder
.catch(() => toast.error('Üzgünüz bir sorun oluştu'));
};
//3) sepetekki elemenı güncelle(miktarı azaltma ve artırma )
export const updateItem = (id, newAmount) => (dispatch) => {
// a) apideki veriyi güncelle
api.patch(`/cart/${id}`, {amount:newAmount})
// b) istek aşarılı olursa reducera haber ver
.then((res) => {dispatch({
    type: ActionTypes.UPDATE_ITEM,
    payload: res.data,
});
toast.info(`ürün miktarı aktırıldı (${newAmount})`)
})
// c) istek başarısız olursa bildirim gönder
.catch(() => toast.error('Üzgünüz bir sorun oluştu'));
};

// 4) elemanı sepeten kaldır 
export const deleteItem = (id) => (dispatch) => {
    api.delete(`/cart/${id}`)
    .then((res) => {dispatch({type: ActionTypes.DELETE_ITEM, payload:id});
    toast.warning('Ürün sepetten kaldırıldı');
})
.catch(() => toast.error('Üzgünüz bir sorun oluştu'))

}
