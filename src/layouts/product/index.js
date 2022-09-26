import CatProduct from './catProduct'
import PromoProduct from './promoProduct'
import styles from '../../layouts/product/Product.module.css'
import Head from 'next/head'
const Products = ({ data }) => {
  return (
    <>
      <Head>
        <title>Coffee - Product</title>
      </Head>
      <CatProduct data={data} />
    </>
  )
}
export default Products
