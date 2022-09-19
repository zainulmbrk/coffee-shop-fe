import Image from 'next/image'
import styles from './Profile.module.css'
import profile from '../../../assets/img/profile.png'
import edit from '../../../assets/img/edit-pencil.png'
import { useDispatch, useSelector } from 'react-redux'
import { AuthLogout } from '../../redux/actions/Auth'
import { useRouter } from 'next/router'
const Profile = () => {
  const { data } = useSelector((state) => state.login)
  console.log(data, 'dataku')
  const router = useRouter()
  const dispatch = useDispatch()
  return (
    <>
      <div className={styles.rowProfile}>
        <div className={`${styles.wrapFlex} container`}>
          <div className={styles.titlePage}>
            <p>User Profile</p>
          </div>
          <div className={styles.cardProfile}>
            <div className={styles.action}>
              <div className={styles.top}>
                <div className={styles.profilePicture}>
                  <Image alt="profile" src={profile} width={100} height={100} />
                </div>
                <h3>Komeng</h3>
                <p>{data.email}</p>
                <button className={styles.choosePhoto}>Choose photo</button>
                <button className={styles.removePhoto}>Remove photo</button>
              </div>
              <div className={styles.middle}>
                <button className={styles.editPassword}>Edit Password</button>
                <p>
                  Do you want to save <br /> the change?
                </p>
              </div>
              <div className={styles.bottom}>
                <button className={styles.saveChanges}>Save Change</button>
                <button className={styles.cancel}>Cancel</button>
                <button
                  className={styles.logout}
                  onClick={() => {
                    dispatch(AuthLogout())
                    router.push('/signin')
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
            <div className={styles.cardContact}>
              <div className={styles.contacts}>
                <div className={styles.header}>
                  <p>Contacts</p>
                  <Image alt="edit" src={edit} />
                </div>
                <div className={styles.formContacts}>
                  <div className={styles.leftContacts}>
                    <div className={styles.email}>
                      <label>Email address:</label>
                      <input type="text" defaultValue={data.email}></input>
                    </div>
                    <div className={styles.address}>
                      <label>Delivery address:</label>
                      <input type="text"></input>
                    </div>
                  </div>
                  <div className={styles.rightContacts}>
                    <div className={styles.mobileNumber}>
                      <label>Mobile Number:</label>
                      <input
                        type="text"
                        defaultValue={data.phone_number}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.details}>
                <div className={styles.title}>
                  <p>Details</p>
                </div>
                <div className={styles.formDetails}>
                  <div className={styles.leftForm}>
                    <div className={styles.displayName}>
                      <label>Display name:</label>
                      <input type="text"></input>
                    </div>
                    <div className={styles.firstName}>
                      <label>First name:</label>
                      <input type="text"></input>
                    </div>
                    <div className={styles.lastName}>
                      <label>Last name:</label>
                      <input type="text"></input>
                    </div>
                  </div>
                  <div className={styles.rightForm}>
                    <div className={styles.date}>
                      <label>DD/MM/YY:</label>
                      <input type="date"></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.gender}></div>
        </div>
      </div>
    </>
  )
}
export default Profile
