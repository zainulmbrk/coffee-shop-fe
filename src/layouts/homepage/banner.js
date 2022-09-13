import bg from '../../../assets/img/bg-home.png'
import styles from './Banner.module.css'
import Image from 'next/image'
import staff from '../../../assets/img/user.png'
import location from '../../../assets/img/location.png'
import server from '../../../assets/img/server.png'
const Banner = () => {
  return (
    <>
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${bg.src})`, height: '645px' }}
      >
        <div className="container">
          <div className="row">
            <div className={styles.search}>
              <input placeholder="search" />
            </div>
            <div className={styles.title}>
              <p>
                Start Your Day with <br /> Coffee and Good Meals
              </p>
            </div>
            <div className={styles.tagline}>
              <p>
                We provide high quality beans, good taste, and healthy <br />{' '}
                meals made by love just for you. Start your day with us <br />{' '}
                for a bigger smile!
              </p>
            </div>
            <div className={styles.started}>
              <button>Get Started</button>
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.infoStaff}>
                <div>
                  <Image alt="staff" src={staff} />
                </div>
                <div>
                  <h4>90+</h4>
                  <p>Staff</p>
                </div>
              </div>
              <div className={styles.infoStore}>
                <div>
                  <Image alt="location" src={location} />
                </div>
                <div>
                  <h4>30+</h4>
                  <p>Store</p>
                </div>
              </div>
              <div className={styles.infoCustomer}>
                <div>
                  <Image alt="server" src={server} />
                </div>
                <div>
                  <h4>800+</h4>
                  <p>Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Banner
