import Link from 'next/link'
import styles from '../footer/Footer.module.css'
import Image from 'next/image'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import logo from '../../../assets/img/logo.png'

const Footer = () => {
  return (
    <>
      <footer className={styles.container}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className={styles.leftFooter}>
                <div className={styles.title}>
                  <p>
                    {' '}
                    <Image src={logo} /> Coffee Shop
                  </p>
                  {/* <svg data-testid="CoffeeIcon"></svg> */}
                </div>
                <div>
                  <p>
                    Coffee Shop is a store that sells some good <br /> meals,
                    and especially coffee. We provide <br /> high quality beans
                  </p>
                </div>
                <div className={styles.socialMedia}>
                  <FaFacebookF
                    style={{
                      backgroundColor: '#FFBA33',
                      color: '#6A4029',
                      padding: '10px',
                      borderRadius: '50px',
                    }}
                    size={50}
                  />
                  <FaTwitter
                    style={{
                      backgroundColor: '#FFBA33',
                      color: '#6A4029',
                      padding: '10px',
                      borderRadius: '50px',
                    }}
                    size={50}
                  />
                  <FaInstagramSquare
                    style={{
                      backgroundColor: '#FFBA33',
                      color: '#6A4029',
                      borderRadius: '50px',
                      padding: '10px',
                    }}
                    size={50}
                  />
                </div>
                <div className={styles.copyright}>
                  <p>&copy; 2020CoffeeStore</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className={styles.centerFooter}>
                <div className={styles.productFooter}>
                  <div className={styles.productTitleFooter}>
                    <p>Product</p>
                  </div>
                  <div className={styles.list}>
                    <Link href="#">Download</Link>
                    <Link href="#">Pricing</Link>
                    <Link href="#">Locations</Link>
                    <Link href="#">Countries</Link>
                    <Link href="#">Blog</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className={styles.rightFooter}>
                <div className={styles.engage}>
                  <div className={styles.titleEngage}>
                    <p>Engage</p>
                  </div>
                  <div className={styles.list}>
                    <Link href="#">Coffee Shop?</Link>
                    <Link href="#">FAQ</Link>
                    <Link href="#">About Us</Link>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms of Service</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
