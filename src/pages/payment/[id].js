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
    `https://app-coffee-shop.herokuapp.com/api/v1/product/${context.params.id}`,
  )
  const paymentcart = await res.json()
  return { props: { paymentcart } }
}
