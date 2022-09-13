import Image from 'next/image'
import pp from '../../../assets/img/robert.png'

import styles from './Testimoni.module.css'
const Testimoni = () => {
  return (
    <>
      <div className={styles.testimoniRow}>
        <div className="container">
          <div className={`${styles.rowContent} row`}>
            <div className={styles.header}>
              <p className={styles.titleHeader}>
                Loved by Thousands of
                <br /> Happy Customer
              </p>
              <p>
                These are the stories of our customers who have visited us with
                great
                <br /> pleasure.
              </p>
            </div>
            <div className={styles.testimoni}>
              <div className={styles.cardTestimoni}>
                <div className={styles.cardHeader}>
                  <div className={styles.picture}>
                    <Image alt="pp" src={pp} />
                  </div>
                  <div className={styles.name}>
                    <p className={styles.testimonialName}>Viezh Robert</p>
                    <p className={styles.address}>Warsaw, Poland</p>
                  </div>
                  <div className={styles.rate}>
                    <p>4.5</p>
                  </div>
                </div>
                <div className={styles.cardComment}>
                  <p>
                    “Wow... I am very happy to spend my whole
                    <br /> day here. the Wi-fi is good, and the coffee and
                    <br /> meals tho. I like it here!! Very recommended!
                  </p>
                </div>
              </div>
              <div className={styles.cardTestimoni}>
                <div className={styles.cardHeader}>
                  <div className={styles.picture}>
                    <Image alt="pp" src={pp} />
                  </div>
                  <div className={styles.name}>
                    <p className={styles.testimonialName}>Viezh Robert</p>
                    <p className={styles.address}>Warsaw, Poland</p>
                  </div>
                  <div className={styles.rate}>
                    <p>4.5</p>
                  </div>
                </div>
                <div className={styles.cardComment}>
                  <p>
                    “Wow... I am very happy to spend my whole
                    <br /> day here. the Wi-fi is good, and the coffee and
                    <br /> meals tho. I like it here!! Very recommended!
                  </p>
                </div>
              </div>
              <div className={styles.cardTestimoni}>
                <div className={styles.cardHeader}>
                  <div className={styles.picture}>
                    <Image alt="pp" src={pp} />
                  </div>
                  <div className={styles.name}>
                    <p className={styles.testimonialName}>Viezh Robert</p>
                    <p className={styles.address}>Warsaw, Poland</p>
                  </div>
                  <div className={styles.rate}>
                    <p>4.5</p>
                  </div>
                </div>
                <div className={styles.cardComment}>
                  <p>
                    “Wow... I am very happy to spend my whole
                    <br /> day here. the Wi-fi is good, and the coffee and
                    <br /> meals tho. I like it here!! Very recommended!
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.promoDay}>
              <div className={styles.tagline}>
                <p className={styles.checkPromo}>
                  Check our promo
                  <br /> today!
                </p>
                <p>Lets see the deals and pick yours!</p>
              </div>
              <div className={styles.btnPromo}>
                <button>See Promo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Testimoni
