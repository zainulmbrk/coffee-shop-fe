import Image from 'next/image'
import pict from '../../../assets/img/teamwork.png'
import styles from './Content.module.css'
import ceklist from '../../../assets/img/ceklist.png'
const Content = () => {
  return (
    <>
      <div className={styles.contentRow}>
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-6">
              <div className={styles.left}>
                <div className={styles.teamwork}>
                  <Image src={pict} width={500} />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.right}>
                <div className={styles.subtitle}>
                  <p>
                    We Provide Good Coffee <br /> and Healthy Meals
                  </p>
                </div>
                <div className={styles.subtagline}>
                  You can explore the menu that we provide with fun and <br />{' '}
                  have their own taste and make your day better.
                </div>
                <div className={styles.ceklist}>
                  <p>
                    <Image src={ceklist} /> High quality beans
                  </p>
                  <p>
                    <Image src={ceklist} /> Healthy meals, you can request the
                    ingredients
                  </p>
                  <p>
                    <Image src={ceklist} /> Chat with our staff to get better
                    experience for ordering
                  </p>
                  <p>
                    <Image src={ceklist} /> Free member card with a minimum
                    purchase of IDR 200.000.
                  </p>
                </div>
                {/* <div className={styles.ceklist2}>
                </div>
                <div className={styles.ceklist3}>
                </div>
                <div className={styles.ceklist4}>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Content
