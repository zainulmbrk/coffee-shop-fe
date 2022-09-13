import CustomerPayment from "../../layouts/payment";

const Payment = ({data})=>{
    return(<>
    <div className="content">

    <CustomerPayment data={data} />
    </div>

    </>)
}
export default Payment

export async function getServerSideProps(context){
    const res = await fetch(`http://localhost:1102/api/v1/product/${context.params.id}`)
    const data = await res.json()
    return { props: { data } }
}