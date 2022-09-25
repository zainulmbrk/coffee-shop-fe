import axios from 'axios'

//GET
const GetCategoryRequest = () => {
  return {
    type: 'GET_CATEGORY_REQUEST',
  }
}

const GetCategorySuccess = (data) => {
  return {
    type: 'GET_CATEGORY_SUCCESS',
    payload: data,
  }
}

const GetCategoryError = (error) => {
  return {
    type: 'GET_CATEGORY_ERROR',
    payload: error,
  }
}

// export async function getServerSideProps() {
//     try{

//             dispatch(GetCATEGORYRequest())
//             await axios({
//                 method:'GET',
//                 url:'http://localhost:1102/api/v1/CATEGORY'
//             }).then(function(res){
//                 dispatch(GetCATEGORYSuccess(res.data.data))
//             }).catch(function(err){
//                 dispatch(GetCATEGORYError(err))
//             })

//     }catch (error){
//         console.log(error)
//     }

//   }

export const GetCategory = () => {
  return (dispatch) => {
    dispatch(GetCategoryRequest())
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_API_URL_BE}/api/v1/category`,
    })
      .then((res) => {
        dispatch(GetCategorySuccess(res.data.data))
      })
      .catch((err) => {
        dispatch(GetCategoryError(err))
      })
  }
}
