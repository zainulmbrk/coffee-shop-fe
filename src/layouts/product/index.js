import CatProduct from './catProduct'
import PromoProduct from './promoProduct'
import styles from '../../layouts/product/Product.module.css'
const Products = ({ data }) => {
  return (
    <>
      <CatProduct data={data} />
    </>
  )
}
export default Products
