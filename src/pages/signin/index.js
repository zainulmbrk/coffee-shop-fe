// import { redirect } from 'express/lib/response'
import Footer from '../../components/footer'
import Login from '../../components/signin'
// import { getCookie } from '../../pages/utilities/authorization'

// export async function getServerSideProps(context) {
//   const dataCookie = await getCookie(context)
//   if (dataCookie.isLogin) {
//     return {
//       redirect: {
//         destination: 'home',
//         permanent: true,
//       },
//     }
//   }
//   return {
//     props: { data: dataCookie },
//   }
// }

const Signin = () => {
  return (
    <>
      <Login />
    </>
  )
}

export default Signin

Signin.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  )
}
