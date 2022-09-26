import styles from './Signup.module.css'
import Image from 'next/image'
import bg from '../../../assets/img/auth.png'
import google from '../../../assets/img/google.png'
import logo from '../../../assets/img/logo.png'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthRegister } from '../../redux/actions/Auth'
import { useRouter } from 'next/router'
import Footer from '../footer'
import Head from 'next/head'
const Register = () => {
  const { error, loading, isRegister } = useSelector((state) => state.register)
  const dispatch = useDispatch()
  const router = useRouter()
  const [formRegister, setFormRegister] = useState({
    email: '',
    password: '',
    phone_number: '',
  })

  const handleRegister = (event) => {
    event.preventDefault()
    dispatch(AuthRegister(formRegister))
    // if(error){
    //     alert("email already registered")
    // }else{
    //     alert("successfully register")
    // }
  }

  useEffect(() => {
    if (isRegister === true) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Success',
        showConfirmButton: false,
        timer: 1500,
        // width: '20em',
        height: '5em',
      })
      router.push('/signin')
    } else {
      router.push('/signup')
    }
  }, [isRegister])

  return (
    <>
      <Head>
        <title>Coffee - Register</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.auth}>
          <div className={styles.leftSide}>
            <Image alt="background" src={bg} />
          </div>
          <div className={styles.rightSide}>
            <form onSubmit={(event) => handleRegister(event)}>
              <div className={styles.header}>
                <Link href="/">
                  <div className={styles.logo}>
                    <p>
                      <Image alt="logo" src={logo} /> Coffee Shop
                    </p>
                  </div>
                </Link>
                <div className={styles.signup}>
                  <p>Sign Up</p>
                </div>
              </div>
              <div className={styles.email}>
                <label>Email Adress :</label>
                <input
                  type={'email'}
                  placeholder="Enter your email adress"
                  onChange={(event) =>
                    setFormRegister((prevData) => ({
                      ...prevData,
                      email: event.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className={styles.password}>
                <label>Password :</label>
                <input
                  type={'password'}
                  placeholder="Enter your password"
                  onChange={(event) =>
                    setFormRegister((prevData) => ({
                      ...prevData,
                      password: event.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className={styles.phone}>
                <label>Phone Number :</label>
                <input
                  type={'phone_number'}
                  placeholder="Enter your phone number"
                  onChange={(event) =>
                    setFormRegister((prevData) => ({
                      ...prevData,
                      phone_number: event.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className={styles.btnSignup}>
                {loading ? (
                  <button disabled={true}>Loading...</button>
                ) : (
                  <button>Sign Up</button>
                )}
                {error && <div>{error.message}</div>}
              </div>
              <div className={styles.btnGoogle}>
                <button>
                  {' '}
                  <Image alt="google" src={google} />
                  Sign up with Google
                </button>
              </div>
              <div className={styles.btnSignin}>
                <h6>Already have an account</h6>
                <Link href="/signin">
                  <button>Sign in here</button>
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
export default Register
