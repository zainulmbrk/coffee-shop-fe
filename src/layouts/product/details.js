import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Image from 'next/image'
import sizeR from '../../../assets/img/sizeR.png'
import sizeL from '../../../assets/img/sizeL.png'
import sizeXL from '../../../assets/img/sizeXL.png'
import styles from '../../layouts/product/Details.module.css'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'
const Details = ({ products }) => {
  const results = products.data[0]
  let router = useRouter()
  const { isLogin } = useSelector((state) => state.login)
  const [count, setCount] = useState(1)

  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  let hasil = results.price * count

  return (
    <>
      <div className={styles.detailsRow}>
        <div className="container">
          <div className="row">
            <div className={styles.header}>
              <p className={styles.promoTitle}>Favorite & Promo</p>
              <p className={styles.titleProduct}>
                {' '}
                <span>{'>'}</span> {results.product_name}
              </p>
            </div>
            <div className={styles.checkoutInfo}>
              <div className={styles.leftInfo} key={results.product_id}>
                <div className={styles.coverProduct}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}/${results.cover}`}
                    width={200}
                    height={200}
                    alt="cover"
                    style={{ borderRadius: '100px' }}
                  />
                </div>
                <div className={styles.priceProduct}>
                  <p className={styles.titleProductName}>
                    {results.product_name}
                  </p>
                  <p className={styles.productPrice}>$ {results.price}</p>
                </div>
                <div className={styles.action}>
                  <button className={styles.cart}>Add to Cart</button>
                  <button className={styles.staff}>Ask a Staff</button>
                </div>
              </div>
              <div className={styles.rightInfo}>
                <div className={styles.cardInfo}>
                  <div className={styles.top}>
                    <p>
                      Delivery only on Monday to
                      <br /> friday at 1 - 7 pm
                    </p>
                  </div>
                  <div className={styles.content}>
                    <p>
                      Cold brewing is a method of
                      <br /> brewing that combines ground
                      <br /> coffee and cool water and uses
                      <br /> time instead of heat to extract the
                      <br /> flavor. It is brewed in small batches
                      <br /> and steeped for as long as 48
                      <br /> hours.
                    </p>
                  </div>
                  <div className={styles.bot}>
                    <p>Choose a size</p>
                    <div className={styles.size}>
                      <Image alt="size" src={sizeR} width={50} height={50} />
                      <Image alt="size" src={sizeL} width={50} height={50} />
                      <Image alt="size" src={sizeXL} width={50} height={50} />
                    </div>
                  </div>
                </div>
                <div className={styles.deliveryMethod}>
                  <div className={styles.title}>
                    <p>Choose Delivery Methods</p>
                  </div>
                  <div className={styles.choose}>
                    <button>Dine In</button>
                    <button>Door Delivery</button>
                    <button>Pick Up</button>
                  </div>
                </div>
                <div className={styles.setTime}>
                  <label>Set time:</label>
                  <input
                    type="text"
                    placeholder="Enter the time you'll arrived"
                  />
                </div>
              </div>
            </div>
            <div className={styles.checkoutAction}>
              {isLogin ? (
                <>
                  <div className={styles.cardCheckout}>
                    <div className={styles.contentCheckout}>
                      <Image
                        src={`https://app-coffee-shop.herokuapp.com/uploads/${results.cover}`}
                        width={50}
                        height={50}
                        alt="cover"
                        style={{ borderRadius: '50px' }}
                      />
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>{results.product_name}</p>
                        <p style={{ fontSize: '0.9em', fontWeight: '500' }}>{results.price}<span style={{ textTransform: 'lowercase', margin: '0 2px' }}>x</span>{count}</p>
                        <span style={{ fontWeight: '700' }}>${hasil}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', columnGap: '1em' }}>
                      <FaMinus size={25} className={styles.actionItem} onClick={decrement} />
                      <span style={{ margin: '0', padding: '0', fontWeight: '800' }}>{count}</span>
                      <FaPlus size={25} className={styles.actionItem} onClick={increment} />

                    </div>
                  </div>
                  <div className={styles.btnCheckout}>
                    <button
                      onClick={() =>
                        router.push(`/payment/${results.product_id}`)
                      }
                    >
                      CHECKOUT
                    </button>
                  </div>
                </>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details
