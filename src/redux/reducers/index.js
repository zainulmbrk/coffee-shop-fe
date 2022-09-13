import { combineReducers } from 'redux'
import {AllProductFetch, ProductByIDFetch} from "../reducers/Product"
import Category from "../reducers/Category"
import { LoginFetch, RegisterFetch } from './Auth'
const rootReducers = combineReducers({
    login: LoginFetch,
    register: RegisterFetch,
    product: AllProductFetch,
    category: Category,
    productId: ProductByIDFetch
})
export default rootReducers