import styles from '../../layouts/history/ListOrder.module.css'
import bgHistory from '../../../assets/img/bg-history.png'
import pict from '../../../assets/img/food3.png'
import Image from 'next/image'
const ListOrder = () => {
  return (
    <>
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${bgHistory.src})` }}
      >
        <div className={styles.header}>
          <h2>Lets see what you have bought!</h2>
          <p>Long press to delete item</p>
        </div>
        <div className={styles.wrapCard}>
          <div className={styles.cardOrder}>
            <div className={styles.cover}>
              <Image alt="pict" src={pict} />
            </div>
            <div className={styles.infoOrder}>
              <h5>Veggie tomato mix</h5>
              <p>IDR 25.000</p>
              <p>Delivered</p>
            </div>
          </div>
          <div className={styles.cardOrder}>
            <div className={styles.cover}>
              <Image alt="pict" src={pict} />
            </div>
            <div className={styles.infoOrder}>
              <h5>Veggie tomato mix</h5>
              <p>IDR 25.000</p>
              <p>Delivered</p>
            </div>
          </div>
          <div className={styles.cardOrder}>
            <div className={styles.cover}>
              <Image alt="pict" src={pict} />
            </div>
            <div className={styles.infoOrder}>
              <h5>Veggie tomato mix</h5>
              <p>IDR 25.000</p>
              <p>Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ListOrder
