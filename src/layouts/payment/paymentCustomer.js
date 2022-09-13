import styles from './Payment.module.css'
import Image from 'next/image'
import pict from '../../../assets/img/coffee1.png'
import card from '../../../assets/img/card.png'
import bank from '../../../assets/img/bank.png'
import cod from '../../../assets/img/cod.png'
const PaymentCustomer = ({ data }) => {
  const results = data.data[0]
  console.log(results, 'cekout')
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapProduct}>
          <div className={styles.header}>
            <h1>
              Checkout your
              <br /> item now!
            </h1>
          </div>
          <div className={styles.paymentInfo}>
            <div className={styles.orderSummary}>
              {/* {results.map((item) => { */}
              <div className={styles.titleSummary} key={results.product_id}>
                <h2>Order Summary</h2>
              </div>
              {/* return (<> */}
              <div className={styles.item}>
                <Image
                  src={`http:localhost:1102/uploads/${results.cover}`}
                  width={150}
                  height={150}
                  alt="cover"
                  style={{ borderRadius: '10px' }}
                />
                <h5>{results.product_name}</h5>
              </div>
              <div className={styles.price}>
                <div className={styles.subtotal}>
                  <h5>SUBTOTAL</h5>
                  <h5>IDR {results.price}</h5>
                </div>
                <div className={styles.tax}>
                  <h5>TAX & FEES</h5>
                  <h5>IDR 20.000</h5>
                </div>
                <div className={styles.shipping}>
                  <h5>SHIPPING</h5>
                  <h5>IDR 10.000</h5>
                </div>
              </div>
              <div className={styles.total}>
                <h2>TOTAL </h2>
                <h2>IDR {results.price}</h2>
              </div>
              {/* </>)
                        })} */}
            </div>
            <div className={styles.custInfo}>
              <div className={styles.address}>
                <h4>Address details</h4>
                <div className={styles.cardAddress}>
                  <h5>Delivery to Iskandar street</h5>
                  <p>
                    Km 5 refinery road oppsite republic
                    <br /> road, effurun, Jakarta
                  </p>
                  <p>+62 81348287878</p>
                </div>
              </div>
              <div className={styles.paymentMethod}>
                <h4>Payment method</h4>
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
                <button>Confirm and Pay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentCustomer
