import PaymentCustomer from './paymentCustomer'
import Head from 'next/head'
const CustomerPayment = ({ paymentcart }) => {
  return (
    <>
      <Head>
        <title>Coffee - Cart</title>
      </Head>
      <PaymentCustomer paymentcart={paymentcart} />
    </>
  )
}

export default CustomerPayment
