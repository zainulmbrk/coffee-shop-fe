const initialState = {
    loading: false,
    data:{},
    error:null 
}

const Fetch = (state=initialState, action={})=>{
    switch(action.type){
        case "GET_CATEGORY_REQUEST":
            return{...state, loading:true}
        case "GET_CATEGORY_ERROR":
            return{...state, loading:false, error: action.payload}
        case "GET_CATEGORY_SUCCESS":
            return{...state, loading:false, results: action.payload, error:null}
        default:
            return state
    }
}

export default Fetch