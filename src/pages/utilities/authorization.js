import cookies from 'next-cookies'

export function getCookie(context) {
  return new Promise((resolve) => {
    let data = cookies(context)
    if (data.token) {
      data.isLogin = true
    } else {
      data.isLogin = false
    }
    if (data.role == 'admin') {
      data.isLogin = true
    } else {
      data.isLogin = false
    }
    if (data.role == 'user') {
      data.isLogin = true
    } else {
      data.isLogin = false
    }
    resolve(data)
  })
}
