import CustomerPayment from '../../layouts/payment'

const Payment = ({ paymentcart }) => {
  return (
    <>
      <div className="content">
        <CustomerPayment paymentcart={paymentcart} />
      </div>
    </>
  )
}
export default Payment

export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/product/${context.params.id}`,
  )
  const paymentcart = await res.json()
  return { props: { paymentcart } }
}
