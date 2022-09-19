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
import { BiMenu } from 'react-icons/bi'
const Navbar = () => {
  const dispatch = useDispatch()
  const { loading, isLogin, data } = useSelector((state) => state.login)
  const router = useRouter()
  // useEffect(() => {
  //   if (isLogin === false) {
  //     router.push('/')
  //   }
  // }, [router])
  const [menu, setMenu] = useState(false)
  // const handleMenu = () => {
  //   setMenu(!menu)
  // }
  const [dropBar, setDropBar] = useState(false)

  return (
    <>
      <div className={styles.product}>
        <div className="container">
          <div className={styles.rowNavbar}>
            <div className={styles.logo}>
              <Image alt="logo" src={logo} width={25} height={30} />
              <p>Coffee Shop</p>
            </div>
            <div
              className={
                menu
                  ? `${styles.navMenu} ${styles.active}`
                  : `${styles.navMenu}`
              }
            >
              <div className={styles.nav}>
                <div className={styles.navDesktop}>
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
                <div className={styles.navResponsive}>
                  <Link href="/users">Profile</Link>
                  <div className={styles.hline}></div>
                  <a href="#">Settings</a>

                  {isLogin && data.role == 'admin' ? (
                    <>
                      <div className={styles.hline}></div>
                      <Link href="/admin">
                        <a>Dashboard</a>
                      </Link>
                    </>
                  ) : (
                    ''
                  )}
                  <div className={styles.hline}></div>
                  {isLogin ? (
                    <button
                      className={styles.logout}
                      onClick={() => {
                        dispatch(AuthLogout())
                        router.push('/signin')
                      }}
                    >
                      Logout
                    </button>
                  ) : (
                    <Link href="/signin">
                      <button className={styles.btnLogin}>Login</button>
                    </Link>
                  )}
                </div>
              </div>
              <div className={styles.auth}>
                {isLogin ? (
                  <>
                    <div className={styles.navRight}>
                      <div className={styles.search}>
                        <Image
                          alt="search"
                          src={search}
                          width={20}
                          height={20}
                        />
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
                          {isLogin ? (
                            <a
                              className={styles.logout}
                              onClick={() => {
                                dispatch(AuthLogout())
                                router.push('/signin')
                              }}
                            >
                              Logout
                            </a>
                          ) : (
                            <Link href="/signin">Login</Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
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

            <div
              className={styles.hamburgerMenu}
              onClick={() => setMenu(!menu)}
            >
              <BiMenu size={25} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
