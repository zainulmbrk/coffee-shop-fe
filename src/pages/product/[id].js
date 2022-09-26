import Details from '../../layouts/product/details'
import { useDispatch, useSelector } from 'react-redux'
import { GetProductByID } from '../../redux/actions/Product'
import axios from 'axios'
const ProductDetails = ({ products }) => {
  // const {results} = products?.products
  console.log(products, 'ini cuuy')
  return (
    <>
      <div className="content">
        <Details products={products} />
      </div>
    </>
  )
}
export default ProductDetails

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://app-coffee-shop.herokuapp.com/api/v1/product/${context.params.id}`,
  )
  const products = await res.json()
  return { props: { products } }
}
