import Image from 'next/image'
import partner1 from '../../../assets/img/netflix.png'
import partner2 from '../../../assets/img/reddit.png'
import partner3 from '../../../assets/img/amazon.png'
import partner4 from '../../../assets/img/discord.png'
import partner5 from '../../../assets/img/spotify.png'
import styles from './Partner.module.css'

const Partner = () => {
  return (
    <>
      <div className={styles.partnerRow}>
        <div className="container">
          <div className="row">
            <div className={styles.header}>
              <p>Our Partner</p>
            </div>
            <div className={styles.list}>
              <div>
                <Image alt="partner" src={partner1} width={200} height={200} />
              </div>
              <div>
                <Image alt="partner" src={partner2} width={200} height={200} />
              </div>
              <div>
                <Image alt="partner" src={partner3} width={200} height={200} />
              </div>
              <div>
                <Image alt="partner" src={partner4} width={200} height={200} />
              </div>
              <div>
                <Image alt="partner" src={partner5} width={200} height={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Partner
