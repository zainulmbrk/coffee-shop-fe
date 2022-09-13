import Image from "next/image"
import styles from './Profile.module.css'
import profile from '../../../assets/img/profile.png'
import edit from '../../../assets/img/edit-pencil.png'
const Profile = () =>{
    return(<>
        <div className={styles.container}>
        <div className={styles.wrapFlex}>
            <div className={styles.titlePage}>
                <h1>User Profile</h1>
            </div>
            <div className={styles.cardProfile}>
                <div className={styles.action}>
                    <div className={styles.top}>
                       <Image src={profile} width={100} height={100} /> 
                        <h3>Komeng</h3>
                        <p>komeng@mail.com</p>
                        <button className={styles.choosePhoto}>Choose photo</button>
                        <button className={styles.removePhoto}>Remove photo</button>
                    </div>
                    <div className={styles.middle}>
                        <button className={styles.editPassword}>Edit Password</button>
                        <h3>Do you want to save <br/> the change?</h3>
                    </div>
                    <div className={styles.bottom}>
                        <button className={styles.saveChanges}>Save Change</button>
                        <button className={styles.cancel}>Cancel</button>
                        <button className={styles.logout}>Logout</button>
                    </div>
                </div>
                <div className={styles.cardContact}>
                        <div className={styles.contacts}>
                            <div className={styles.header}>
                            <h2>Contacts</h2>
                            <Image src={edit} />
                            </div>
                            <div className={styles.formContacts}>
                                <div className={styles.leftContacts}>
                                    <div className={styles.email}>
                                    <label>Email address:</label>
                                    <input type="text"></input>
                                    </div>
                                    <div className={styles.address}>
                                    <label>Delivery address:</label>
                                    <input type="text"></input>
                                    </div>
                                </div>
                                <div className={styles.rightContacts}>
                                    <div className={styles.mobileNumber}>
                                    <label>Mobile Number:</label>
                                    <input type="text"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.details}>
                            <div className={styles.title}>
                                <h2>Details</h2>
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
    </>)
}
export default Profile