import styles from './Cart.module.css'
import Image from 'next/image'
import pict from '../../../assets/img/coffee1.png'
import card from '../../../assets/img/card.png'
import bank from '../../../assets/img/bank.png'
import cod from '../../../assets/img/cod.png'
const CustomerCart = () => {
    return (<>
        <div className={styles.container}>
            <div className={styles.wrapProduct}>
                <div className={styles.header}>
                    <h1>Checkout your<br /> item now!</h1>
                </div>
                <div className={styles.paymentInfo}>
                    <div className={styles.orderSummary}>
                        <div className={styles.titleSummary}>
                            <h2>Order Summary</h2>
                        </div>
                        <div className={styles.item}>
                            <Image src={pict} width={150} height={150} style={{ borderRadius: "10px" }} />
                            <h5>Americano</h5>
                        </div>
                        <div className={styles.price}>
                            <div className={styles.subtotal}>
                                <h5>SUBTOTAL</h5>
                                <h5>IDR 120.000</h5>
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
                            <h2>IDR 150.000</h2>
                        </div>
                    </div>
                    <div className={styles.custInfo}>
                        <div className={styles.address}>
                            <h4>Address details</h4>
                            <div className={styles.cardAddress}>
                                <h5>Delivery to Iskandar street</h5>
                                <p>Km 5 refinery road oppsite republic<br /> road, effurun, Jakarta</p>
                                <p>+62 81348287878</p>
                            </div>
                        </div>
                        <div className={styles.paymentMethod}>
                            <h4>Payment method</h4>
                            <div className={styles.cardPaymentMethod}>
                                <label htmlFor="myRadioId" className={styles.radio}>
                                    <input type="radio" name="radio" id="myRadioId" className={styles.radioInput} />
                                    <Image src={card} width={20} height={20} />
                                    Card
                                </label>
                                <label htmlFor="myRadioId" className={styles.radio}>
                                    <input type="radio" name="radio" id="myRadioId" className={styles.radioInput} />
                                    <Image src={bank} width={20} height={20} />
                                    Bank account
                                </label>
                                <label htmlFor="myRadioId" className={styles.radio}>
                                    <input type="radio" name="radio" id="myRadioId" className={styles.radioInput} />
                                    <Image src={cod} width={20} height={20} />
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

    </>)
}

export default CustomerCart