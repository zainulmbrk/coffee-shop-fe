//getallproduct
const initialState = {
    loading: false,
    data:{},
    error:null 
}

export const AllProductFetch = (state=initialState, action={})=>{
    switch(action.type){
        case "GET_PRODUCT_REQUEST":
            return{...state, loading:true}
        case "GET_PRODUCT_ERROR":
            return{...state, loading:false, error: action.payload}
        case "GET_PRODUCT_SUCCESS":
            return{...state, loading:false, results: action.payload, error:null}
        default:
            return state
    }
}

//getproductbyid
const initialStates = {
    loading: false,
    data:{},
    error:null 
}

export const ProductByIDFetch = (state=initialStates, action={})=>{
    switch(action.type){
        case "GET_PRODUCTBYID_REQUEST":
            return{... state, loading: true}
        case "GET_PRODUCTBYID_ERROR":
            return{...state, loading:false, error: action.payload}
        case "GET_PRODUCTBYID_SUCCESS":
            return{...state, loading:false, results: action.payload, error:null}
        default:
            return state
    }
}