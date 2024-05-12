import ActionTypes from "../actionTypes";
import api from "../../utils/api";


//! Asenkron Thunk Akisyonu
// Normalde redux asenkron işlemler yapabilen akiyonları kabul etmez bundan kaynaklı olarak bir thunk aksiyonu oluşturucaz

//? Nasıl Tanımlarız ?
// Bir thunk fonksiyonu tanınmlamak için bir fonksiyon içerisnde ikinci fonksiyonu return ederiz ve return ettiğimiz bu fonksiyon dispatch'i parametre olarak alır
const thunkFonksiyonu = () => {
    return (dispatch) => {
          // api isteklerini burada atarız ve dispatchi parametre olarak aldığı için dispatch gerçekleştirebiliriz
    };
}


//?ilk olarak 
// Restoran verilerini alıp store a aktaran bir aksiyon fonksiyonu yazacağız

export const getRestaurants = () => (dispatch) => {
    dispatch({ type: ActionTypes.REST_LOADING});

    api
    .get('/restaurants')
    .then((res) => dispatch({ type: ActionTypes.REST_SUCCESS, payload: res.data}))
    .catch((err) => dispatch({ type: ActionTypes.REST_ERROR, payload: err.message})
    );
} 