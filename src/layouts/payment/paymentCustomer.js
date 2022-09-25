import styles from './Payment.module.css'
import Image from 'next/image'
import card from '../../../assets/img/card.png'
import bank from '../../../assets/img/bank.png'
import cod from '../../../assets/img/cod.png'
import cart from '../../../assets/img/cart.png'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useRouter } from 'next/router'
const PaymentCustomer = ({ paymentcart }) => {
  const results = paymentcart.data[0]
  const [refetch, setRefetch] = useState('')
  const { data } = useSelector((state) => state.login)
  console.log(data, 'tesbro')
  const router = useRouter()

  // const formData = new FormData()
  // const [formAddData, setFormAddData] = useState({})
  // formData.append('user_id', data.user_id)
  // formData.append('product_id', results.product_id)
  // formData.append('product_name', results.product_name)
  // formData.append('total_price', results.price)
  const handlePayment = async (event) => {
    event.preventDefault()
    try {
      const res = await axios({
        method: 'POST',
        url: `https://app-coffee-shop.herokuapp.com/api/v1/payment`,
        data:
        {
          user_id: data.user_id,
          product_id: results.product_id,
          product_name: results.product_name,
          total_price: results.price,
        },
        headers: {
          authorization: data.token,
          // 'Content-Type': 'multipart/form-data',
        },
      })
      if (res) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Payment Success',
          showConfirmButton: false,
          timer: 1500,
          // width: '20em',
          height: '5em',
        })
        setRefetch(!refetch)

      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.wrapProduct} container`}>
          <div className="row">
            <div className={styles.titlePage}>
              {results ? <h2>Checkout your item now!</h2> : ''}
              <input type="hidden" id="user_id" value={data.user_id}></input>
              {results ? <><input
                type="hidden"
                id="product_id"
                value={results.product_id}
              ></input></> : ''}

            </div>
            {results ? <><div className={styles.paymentInfo}>
              <div className={styles.orderSummary}>
                <div className={styles.titleSummary} key={results.product_id}>
                  <h2>Order Summary</h2>
                </div>

                <div className={styles.itemDetails} id="listItems">
                  <div className={styles.item}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}/${results.cover}`}
                      width={150}
                      height={150}
                      alt="cover"
                      style={{ borderRadius: '10px' }}
                    />
                    <h5>
                      {' '}
                      <span id="product_name">{results.product_name}</span>{' '}
                    </h5>
                  </div>
                </div>
                <div className={styles.price}>
                  <div className={styles.subtotal}>
                    <p>SUBTOTAL</p>
                    <p>
                      IDR <span id="sub_total">{results.price}</span>{' '}
                    </p>
                  </div>
                  {/* <div className={styles.tax}>
                    <p>TAX & FEES</p>
                    <p>IDR 20.000</p>
                  </div>
                  <div className={styles.shipping}>
                    <p>SHIPPING</p>
                    <p>IDR 10.000</p>
                  </div> */}
                </div>
                <div className={styles.total}>
                  <p>TOTAL </p>
                  <p>
                    IDR <span id="total">{results.price}</span>{' '}
                  </p>
                </div>
              </div>
              <div className={styles.custInfo}>
                <div className={styles.address}>
                  <p className={styles.titleAddress}>Address details</p>
                  <div className={styles.cardAddress}>
                    <p className={styles.titleDelivery}>
                      Delivery to Iskandar street
                    </p>
                    <p className={styles.textUser}>
                      Km 5 refinery road oppsite republic
                      <br /> road, effurun, Jakarta
                    </p>
                    <p className={styles.phoneUser}>+6281212876564</p>
                  </div>
                </div>
                <div className={styles.paymentMethod}>
                  <p className={styles.titlePaymentMethod}>Payment method</p>
                  <div className={styles.cardPaymentMethod}>
                    <label htmlFor="myRadioId" className={styles.radio}>
                      <input
                        type="radio"
                        name="radio"
                        id="myRadioId"
                        className={styles.radioInput}
                      />
                      <Image alt="card" src={card} width={20} height={20} />
                      Card
                    </label>
                    <label htmlFor="myRadioId" className={styles.radio}>
                      <input
                        type="radio"
                        name="radio"
                        id="myRadioId"
                        className={styles.radioInput}
                      />
                      <Image alt="bank" src={bank} width={20} height={20} />
                      Bank account
                    </label>
                    <label htmlFor="myRadioId" className={styles.radio}>
                      <input
                        type="radio"
                        name="radio"
                        id="myRadioId"
                        className={styles.radioInput}
                      />
                      <Image alt="cod" src={cod} width={20} height={20} />
                      Cash on delivery
                    </label>
                  </div>
                </div>
                <div className={styles.action}>
                  <button onClick={handlePayment}>Confirm and Pay</button>
                </div>
              </div>
            </div></> : <><div className={styles.noCart}>
              <Image src={cart} alt={cart} width={100} height={100} />
              <p>No Cart Order</p>
              <p className={styles.noCartHistory}>You don't have any cart</p>
            </div></>}

          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentCustomer
