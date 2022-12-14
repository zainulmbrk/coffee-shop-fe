import React from 'react'
import Admin from '../../layouts/admin'
const Dashboard = ({ products }) => {
  return (
    <>
      <div className="content">
        <Admin products={products} />
      </div>
    </>
  )
}

export default Dashboard

export async function getServerSideProps() {
  const res = await fetch(`https://app-coffee-shop.herokuapp.com/api/v1/product`)
  const products = await res.json()
  return { props: { products } }
}
