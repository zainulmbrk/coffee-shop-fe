import PaymentCustomer from './paymentCustomer'

const CustomerPayment = ({ paymentcart }) => {
  return (
    <>
      <PaymentCustomer paymentcart={paymentcart} />
    </>
  )
}

export default CustomerPayment
