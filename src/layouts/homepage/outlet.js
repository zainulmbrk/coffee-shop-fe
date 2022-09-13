import Image from 'next/image'
import map from '../../../assets/img/map.png'
import styles from './Outlet.module.css'

const Outlet = () => {
  return (
    <>
      <div className={styles.outlets}>
        <div className="container">
          <div className="row"></div>
        </div>
        <div className={styles.header}>
          <p className={styles.taglineOutlet}>
            Visit Our Store in the <br /> Spot on the Map Below
          </p>
          <p className={styles.subTagline}>
            See our store in every city on the spot and spen your good day
            there.
            <br /> See you soon!
          </p>
        </div>
        <div className="map">
          <Image alt="map" src={map} width={1060} height={500} />
        </div>
      </div>
    </>
  )
}
export default Outlet
