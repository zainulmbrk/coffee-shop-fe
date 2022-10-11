import axios from 'axios'

//GET
const GetProductRequest = () => {
  return {
    type: 'GET_PRODUCT_REQUEST',
  }
}

const GetProductSuccess = (data) => {
  return {
    type: 'GET_PRODUCT_SUCCESS',
    payload: data,
  }
}

const GetProductError = (error) => {
  return {
    type: 'GET_PRODUCT_ERROR',
    payload: error,
  }
}

export const GetProduct = () => {
  return (dispatch) => {
    dispatch(GetProductRequest())
    axios({
      method: 'GET',
      url: `https://app-coffee-shop.herokuapp.com/api/v1/product`,
    })
      .then((res) => {
        dispatch(GetProductSuccess(res.data.data))
      })
      .catch((err) => {
        dispatch(GetProductError(err))
      })
  }
}

const GetProductBy$equest = () => {
  return {
    type: 'GET_PRODUCTBYID_REQUEST',
  }
}

const GetProductByIDSuccess = (data) => {
  return {
    type: 'GET_PRODUCTBYID_SUCCESS',
    payload: data,
  }
}

const GetProductByIDError = (error) => {
  return {
    type: 'GET_PRODUCTBYID_ERROR',
    payload: error,
  }
}

export const GetProductByID = (movies_id) => {
  return (dispatch) => {
    dispatch(GetProductBy$equest())
    axios({
      method: 'GET',
      url: `https://app-coffee-shop.herokuapp.com/product/${movies_id}`,
    })
      .then((res) => {
        dispatch(GetProductByIDSuccess(res.data.data))
      })
      .catch((err) => {
        dispatch(GetProductByIDError(err))
      })
  }
}

// export async function GetProduct() {
//     try{

//             dispatch(GetProductRequest())
//             await axios({
//                 method:'GET',
//                 url:'http://localhost:1102/api/v1/product'
//             }).then(function(res){
//                 dispatch(GetProductSuccess(res.data.data))
//             }).catch(function(err){
//                 dispatch(GetProductError(err))
//             })

//     }catch (error){
//         console.log(error)
//     }

//   }
