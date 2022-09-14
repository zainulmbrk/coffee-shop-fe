import { AuthLogout } from '../../redux/actions/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../navbar/Navbar.module.css'
import logo from '../../../assets/img/logo.png'
import search from '../../../assets/img/search.png'
import profile from '../../../assets/img/profile.png'
import msg from '../../../assets/img/msg.png'
import off from '../../../assets/img/off.png'
const Navbar = () => {
  const dispatch = useDispatch()
  const { loading, isLogin, data } = useSelector((state) => state.login)
  const router = useRouter()
  // useEffect(() => {
  //   if (isLogin === false) {
  //     router.push('/')
  //   }
  // }, [router])

  const [dropBar, setDropBar] = useState(false)

  return (
    <>
      <div className={styles.product}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-2 d-flex align-items-center">
              <div className={styles.logo}>
                <p>
                  <Image alt="logo" src={logo} width={25} height={30} /> Coffee
                  Shop
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className={styles.nav}>
                <div className={styles.home}>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </div>
                <div className={styles.products}>
                  <Link href="/product">
                    <a>Product</a>
                  </Link>
                </div>
                <div className={styles.cart}>
                  <Link href="/payment">
                    <a>Cart</a>
                  </Link>
                </div>
                <div className={styles.history}>
                  <Link href="/history">
                    <a>History</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-2 d-flex justify-content-end align-items-center gap-1">
              <div className={styles.auth}>
                {isLogin ? (
                  <div className={styles.navRight}>
                    <div className={styles.search}>
                      <Image alt="search" src={search} width={20} height={20} />
                    </div>
                    <div className={styles.msg}>
                      <Image alt="message" src={msg} width={20} height={20} />
                    </div>
                    <div className={styles.dropdown}>
                      <button
                        className={styles.dropbtn}
                        onClick={() => setDropBar(!dropBar)}
                      ></button>
                      <div
                        className={
                          dropBar
                            ? `${styles.dropdownContent} ${styles.active}`
                            : `${styles.dropdownContent}`
                        }
                      >
                        <Link href="/users">Profile</Link>
                        <a href="#">Settings</a>
                        {isLogin && data.role == 'admin' ? (
                          <Link href="/admin">
                            <a>Dashboard</a>
                          </Link>
                        ) : (
                          ''
                        )}

                        <a
                          className={styles.logout}
                          onClick={() => {
                            dispatch(AuthLogout())
                          }}
                        >
                          {/* <button
                            className={styles.logout} */}
                          {/* > */}
                          Logout
                          {/* <Image src={off} width={15} height={15} /> Logout */}
                          {/* </button> */}
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    {
                      <Link href="/signin">
                        <button className={styles.login}>Login</button>
                      </Link>
                    }
                    {
                      <Link href="/signup">
                        <button className={styles.signup}>Signup</button>
                      </Link>
                    }
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
