import Details from "../../layouts/product/details"
import { useDispatch, useSelector } from "react-redux"
import { GetProductByID } from "../../redux/actions/Product"
import axios from "axios"
const ProductDetails = ({data}) =>{
    // const {results} = data?.data
    console.log(data, "ini cuuy")
    return(<>
        <div className="content">
            <Details data={data}/>
        </div>
    </>)
}
export default ProductDetails

export async function getServerSideProps(context){
    const res = await fetch(`http://localhost:1102/api/v1/product/${context.params.id}`)
    const data = await res.json()
  return { props: { data } }
}
