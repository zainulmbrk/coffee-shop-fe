import styles from './Signin.module.css'
import Image from 'next/image'
import bg from '../../../assets/img/auth.png'
import google from '../../../assets/img/google.png'
import logo from '../../../assets/img/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { AuthLogin } from '../../redux/actions/Auth'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Footer from '../footer'
import axios from 'axios'
import Swal from 'sweetalert2'
// import Cookie from 'js-cookie'

// const Loading = () => {
//   return <div>Loading</div>
// }

const Login = () => {
  const dispatch = useDispatch()
  const { loading, error, isLogin } = useSelector((state) => state.login)
  const router = useRouter()
  //   const [loading, setLoading] = useState('')
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: '',
  })

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(AuthLogin(formLogin))
  }

  useEffect(() => {
    if (isLogin === true) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Success',
        showConfirmButton: false,
        timer: 1500,
        // width: '20em',
        height: '5em',
      })
      router.push('/')
    } else {
      router.push('/signin')
    }
  }, [isLogin])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.auth}>
          <div className={styles.leftSide}>
            <Image alt="backgorund" src={bg} />
          </div>
          <div className={styles.rightSide}>
            <form onSubmit={(event) => handleLogin(event)}>
              <div className={styles.header}>
                <div className={styles.logo}>
                  <h4>
                    {' '}
                    <Image alt="logo" src={logo} /> Coffee Shop
                  </h4>
                </div>
                <div className={styles.login}>
                  <h2>Login</h2>
                </div>
              </div>

              <div className={styles.email}>
                <label>Email Adress :</label>
                <input
                  type={'email'}
                  placeholder="Enter your email adress"
                  onChange={(event) =>
                    setFormLogin((prevData) => ({
                      ...prevData,
                      email: event.target.value,
                    }))
                  }
                />
              </div>
              <div className={styles.password}>
                <label>Password :</label>
                <input
                  type={'password'}
                  placeholder="Enter your password"
                  onChange={(event) =>
                    setFormLogin((prevData) => ({
                      ...prevData,
                      password: event.target.value,
                    }))
                  }
                />
              </div>
              <div className={styles.btnLogin}>
                {loading ? (
                  <button disabled={true}>Loading...</button>
                ) : (
                  <button>Login</button>
                )}
                {error && <div>{error.message}</div>}
                {/* <button>Login</button> */}
              </div>
              <div className={styles.btnGoogle}>
                <button>
                  {' '}
                  <Image alt="google" src={google} />
                  Login with Google
                </button>
              </div>
              <div className={styles.btnSignup}>
                <h6>Dont have an account?</h6>
                <Link href="/signup">
                  <button>Sign up here</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Login
