import Products from '../../layouts/product'

// const Product = () =>{
//     return(<>
//         <div className="content">
//             <Products/>
//         </div>
//     </>)
// }
// export default Product

const Product = ({ data }) => {
  return (
    <>
      <div className="content">
        <Products data={data} />
      </div>
    </>
  )
}
export default Product

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`)
  const data = await res.json()
  return { props: { data } }
}
