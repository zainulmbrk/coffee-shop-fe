import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProduct } from '../../redux/actions/Product'
import { useRouter } from 'next/router'
import { GetCategory } from '../../redux/actions/Category'
import Link from 'next/link'
import styles from './CatProduct.module.css'
const CatProduct = ({ data }) => {
  const dispatch = useDispatch()

  const results = data.data.results
  console.log(results, 'iininiiin')
  let router = useRouter()
  // const data = useSelector((state) => state.product)
  const [showProduct, setShowProduct] = useState()

  useEffect(() => {
    dispatch(GetCategory())
  }, [])
  const dataCategory = useSelector((state) => state.category)
  console.log(dataCategory, 'ininiiinini')
  return (
    <>
      <div className={styles.sectionProduct}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className={styles.sectionPromo}>
                <div className={styles.leftContent}>
                  <div className={styles.header}>
                    <p className={styles.titlePromo}>Promo Today</p>
                    <p className={styles.titleCoupon}>
                      Coupons will be updated every weeks.
                      <br /> Check them out!{' '}
                    </p>
                  </div>
                  <div className={styles.cardPromo}>
                    <div className={styles.mothersDay}>
                      <p className={styles.titleMothersDay}>
                        HAPPY MOTHER'S DAY!
                      </p>
                      <p className={styles.contentPromo}>
                        Get one of our favorite
                        <br /> menu for free!
                      </p>
                    </div>
                    <div className={styles.morningPromo}>
                      <p className={styles.titleMorningPromo}>
                        Get a cup of coffee for free
                        <br /> on sunday morning
                      </p>
                      <p className={styles.timePromo}>Only at 7 to 9 AM</p>
                    </div>
                    <div className={styles.halloweenPromo}>
                      <p className={styles.titleHalloweenPromo}>
                        HAPPY HALLOWEEN
                      </p>
                      <p className={styles.contentHalloweenPromo}>
                        Do you like chicken wings? Get 1<br /> free only if you
                        buy pinky promise
                      </p>
                    </div>
                    <div className={styles.applyCoupon}>
                      <button>Apply Coupon</button>
                    </div>
                  </div>
                  <div className={styles.termsCondition}>
                    <div className={styles.point}>
                      <p className={styles.titleTerms}>Terms and Condition</p>
                      <p className={styles.listTerms}>
                        1. You can only apply 1 coupon per day{' '}
                      </p>
                      <p className={styles.listTerms}>2. It only for dine in</p>
                      <p className={styles.listTerms}>
                        3. Buy 1 get 1 only for new user
                      </p>
                      <p className={styles.listTerms}>
                        4. Should make member card to apply coupon
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className={styles.rightContent}>
                <div className={styles.header}>
                  {dataCategory?.results?.map((item) => {
                    return (
                      <>
                        <div key={item.category_id}>
                          <Link href="#">
                            <button
                              className={router.category_id == item.category_id}
                            >
                              {item.category_name}
                            </button>
                          </Link>
                        </div>
                      </>
                    )
                  })}
                </div>
                <div className={styles.listProduct}>
                  {results?.map((item) => {
                    return (
                      <>
                        <Link href={`/product/${item.product_id}`}>
                          <div key={item.product_id}>
                            <div className={styles.cardProduct}>
                              <div className="cover">
                                <img
                                  src={`http://localhost:1102/uploads/${item.cover}`}
                                />
                              </div>
                              <div className={styles.name}>
                                <p className={styles.nameProduct}>
                                  {item.product_name}
                                </p>
                              </div>
                              <div className={styles.price}>
                                <p className={styles.priceProduct}>
                                  {item.price}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CatProduct
