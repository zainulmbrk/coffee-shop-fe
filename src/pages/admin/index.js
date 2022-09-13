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
  const res = await fetch(`http://localhost:1102/api/v1/product/`)
  const products = await res.json()
  return { props: { products } }
}
