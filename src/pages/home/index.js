import axios from 'axios'
import Homepage from '../../layouts/homepage'
import Image from 'next/image'
const Home = (props) => {
  const { data } = props
  return (
    <>
      {data.map((item, index) => {
        return (
          <>
            <div className="img-preview" key={index}>
              <Image
                alt="cover"
                src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}/uploads/${item.cover}`}
                width={100}
                height={100}
              />
            </div>
            <div className="title">
              <h4>{item.product_name}</h4>
            </div>
            <div className="details">
              <p>Hazelnut Syrup</p>
              <p>vanilla Whipped Cream</p>
              <p>Ice Hot</p>
              <p>Liced Banana on Top</p>
            </div>
            <div className="price">
              <h2>{item.price}</h2>
            </div>
          </>
        )
      })}
    </>
  )
}

export default Home

export async function getServerSideProps() {
  // const res = await fetch(`http://localhost:1102/api/v1/product`)
  // const data = await res.json()
  let data = []

  try {
    const results = await axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_API_URL}/product`,
    })
    data = results
  } catch (error) {
    console.log(error)
  }

  return { props: { data } }
}
