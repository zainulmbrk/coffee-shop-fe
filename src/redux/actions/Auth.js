import axios from 'axios'

//REGISTER
const RegisterRequest = () => {
  return {
    type: 'REGISTER_REQUEST',
  }
}

const RegisterSuccess = (data) => {
  return {
    type: 'REGISTER_SUCCESS',
    payload: data,
  }
}

const RegisterError = (error) => {
  return {
    type: 'REGISTER_ERROR',
    payload: error,
  }
}

export const AuthRegister = (formData) => {
  return (dispatch) => {
    dispatch(RegisterRequest())
    axios({
      method: 'POST',
      url: `https://app-coffee-shop.herokuapp.com/api/v1/auth/register`,
      data: {
        email: formData.email,
        password: formData.password,
        phone_number: formData.phone_number,
      },
    })
      .then((res) => {
        dispatch(RegisterSuccess(res.data.data))
      })
      .catch((error) => {
        dispatch(RegisterError(error.response.data))
      })
  }
}

//LOGIN
const LoginRequest = () => {
  return {
    type: 'LOGIN_REQUEST',
  }
}

const LoginSuccess = (data) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: data,
  }
}

const LoginError = (error) => {
  return {
    type: 'LOGIN_ERROR',
    payload: error,
  }
}

export const AuthLogin = (formData) => {
  return (dispatch) => {
    dispatch(LoginRequest())
    axios({
      method: 'POST',
      url: `https://app-coffee-shop.herokuapp.com/api/v1/auth/login`,
      data: {
        email: formData.email,
        password: formData.password,
      },
    })
      .then((res) => {
        dispatch(LoginSuccess(res.data.data))
      })
      .catch((error) => {
        dispatch(LoginError(error.response.data))
      })
  }
}

export const AuthLogout = () => {
  return {
    type: 'AUTH_LOGOUT',
  }
}
