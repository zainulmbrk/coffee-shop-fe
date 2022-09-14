import Register from '../../components/signup'
import Footer from '../../components/footer'
const Signup = () => {
  return (
    <>
      <Register />
    </>
  )
}
export default Signup

Signup.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  )
}
