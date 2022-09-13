import React from 'react'
import styles from './Promo.module.css'
const Promo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className={styles.promoDay}>
          <div className={styles.tagline}>
            <p className={styles.checkPromo}>
              Check our promo
              <br /> today!
            </p>
            <p>Let's see the deals and pick yours!</p>
          </div>
          <div className={styles.btnPromo}>
            <button>See Promo</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promo
