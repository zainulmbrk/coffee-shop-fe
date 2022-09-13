import styles from '../../layouts/product/Promo.module.css'
const PromoProduct = () => {
  return (
    <>
      <div className={styles.sectionPromo}>
        <div className={styles.leftContent}>
          <div className={styles.header}>
            <h3>Promo Today</h3>
            <p>
              Coupons will be updated every weeks.
              <br /> Check them out!{' '}
            </p>
          </div>
          <div className={styles.cardPromo}>
            <div className={styles.mothersDay}>
              <h4>HAPPY MOTHERS DAY!</h4>
              <p>
                Get one of our favorite
                <br /> menu for free!
              </p>
            </div>
            <div className={styles.morningPromo}>
              <h4>
                Get a cup of coffee for free
                <br /> on sunday morning
              </h4>
              <p>Only at 7 to 9 AM</p>
            </div>
            <div className={styles.halloweenPromo}>
              <h4>HAPPY HALLOWEEN</h4>
              <p>
                Do you like chicken wings? Get 1<br /> free only if you buy
                pinky promise
              </p>
            </div>
            <div className={styles.applyCoupon}>
              <button>Apply Coupon</button>
            </div>
          </div>
          <div className={styles.termsCondition}>
            <div className={styles.point}>
              <h5>Terms and Condition</h5>
              <p>1. You can only apply 1 coupon per day </p>
              <p>2. It only for dine in</p>
              <p>3. Buy 1 get 1 only for new user</p>
              <p>4. Should make member card to apply coupon</p>
            </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.vl}></div>
        </div>
      </div>
    </>
  )
}
export default PromoProduct
