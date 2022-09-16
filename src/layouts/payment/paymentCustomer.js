import styles from './Payment.module.css'
import Image from 'next/image'
import pict from '../../../assets/img/coffee1.png'
import card from '../../../assets/img/card.png'
import bank from '../../../assets/img/bank.png'
import cod from '../../../assets/img/cod.png'
import axios from 'axios'
import { useSelector } from 'react-redux'
const PaymentCustomer = ({ paymentcart }) => {
  const results = paymentcart.data[0]
  console.log(paymentcart, 'cekout')

  const { data } = useSelector((state) => state.login)
  console.log(data, 'tesbro')
  // console.log(localStorage.getItem('root'))
  // var dim             = $("#dim").val();
  //       var atas_nama       = $("#atas_nama").val();
  //       var nama_bank       = $("#nama_bank").val();
  //       var nomor_rekening  = $("#nomor_rekening").val();
  //       var kantor_cabang   = $("#kantor_cabang").val();

  //       $.ajax({
  //         type:'POST',
  //         url: '<?php echo base_url() . 'payment/update-bank-account' ?>',
  //         data:{'dim':dim, 'atas_nama':atas_nama, 'nama_bank':nama_bank, 'nomor_rekening':nomor_rekening, 'kantor_cabang':kantor_cabang},
  //         dataType : 'json',
  //         success: function (data) {
  //             if (data.status == 200) {
  //                 Swal.fire({
  //                   type: 'success',
  const handlePayment = () => {
    var user_id = document.getElementById('user_id').value
    console.log(user_id, 'user_id')
    var total_Price = document.getElementById('payment').innerText
    var total_Price = document.getElementById('payment').innerText
    var total_Price = document.getElementById('payment').innerText
  }

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.wrapProduct} container`}>
          <div className="row">
            <div>
              <h2>Checkout your item now!</h2>
              <input type="hidden" id="user_id" value={data.user_id}></input>
            </div>
            <div className={styles.paymentInfo}>
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
                    <h5>{results.product_name}</h5>
                  </div>
                </div>
                <div className={styles.price}>
                  <div className={styles.subtotal}>
                    <p>SUBTOTAL</p>
                    <p>IDR {results.price}</p>
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
                    IDR <span id="payment">{results.price}</span>{' '}
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
                    <p className={styles.phoneUser}>{data.phone_number}</p>
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentCustomer
