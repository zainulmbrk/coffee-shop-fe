import CustomerCart from "../../layouts/payment/cart"

const Cart = ()=>{
    return(<>
    <div className="content">

    <CustomerCart/>
    </div>

    </>)
}
export default Cart

// export async function getServerSideProps(context){
//     const res = await fetch(`http://localhost:1102/api/v1/product/${context.params.id}`)
//     const data = await res.json()
//     return { props: { data } }
// }