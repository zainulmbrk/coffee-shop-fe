//LOGIN
const initialState = {
  loading: false,
  data: {
    token: null,
    user_id: null,
    role: null,
    phone_number: null,
  },
  error: null,
  isLogin: false,
}

export const LoginFetch = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, loading: true }
    case 'LOGIN_ERROR':
      return {
        ...state,
        loading: false,
        data: state.data,
        error: action.payload,
        isLogin: false,
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
        isLogin: true,
      }
    case 'AUTH_LOGOUT':
      return {
        loading: false,
        data: { user_id: null, token: null },
        error: null,
        isLogin: false,
      }
    default:
      return state
  }
}

//REGISTER
const initialStates = {
  loading: false,
  data: {},
  message: null,
  error: null,
  isRegister: false,
}

export const RegisterFetch = (state = initialStates, action = {}) => {
  switch (action.type) {
    case 'REGISTER_REQUEST':
      return { ...state, loading: true }
    case 'REGISTER_ERROR':
      return {
        ...state,
        loading: false,
        data: state.data,
        message: action.payload,
        error: action.payload,
        isRegister: false,
      }
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
        isRegister: true,
      }
    default:
      return state
  }
}
