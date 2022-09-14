import Image from 'next/image'
import hz from '../../../assets/img/food1.png'
import styles from './Favorite.module.css'
import Home from '../../pages/home'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProduct } from '../../redux/actions/Product'
import cek from '../../../assets/img/cek.png'
import { BiCheck } from 'react-icons/bi'
const Favorite = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetProduct())
  }, [dispatch])
  const data = useSelector((state) => state.product)
  console.log(data.results, 'ini boy')
  return (
    <>
      <div className={styles.container}>
        <div className="container">
          <div className="row">
            <div className={styles.tagline}>
              <p className={styles.titleTagline}>Here is Peoples Favorite</p>
              <p>
                Lets choose and have a bit taste of poeples favorite. It might
                be yours too!
              </p>
            </div>
            <div className={styles.content}>
              {data?.results?.results?.slice(0, 3).map((item, index) => {
                return (
                  <>
                    <div className={styles.food1} key={index}>
                      <div className="img-preview">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}/uploads/${item.cover}`}
                          width={100}
                          height={100}
                          alt="cover"
                          style={{ borderRadius: '50px' }}
                        />
                      </div>
                      <div className={styles.titleProduct}>
                        <p>{item.product_name}</p>
                      </div>
                      <div className={styles.details}>
                        <p>
                          {' '}
                          <BiCheck size={17} style={{ color: 'green' }} />{' '}
                          Hazelnut Syrup
                        </p>
                        <p>
                          {' '}
                          <BiCheck size={17} style={{ color: 'green' }} />{' '}
                          vanilla Whipped Cream
                        </p>
                        <p>
                          {' '}
                          <BiCheck size={17} style={{ color: 'green' }} /> Ice
                          Hot
                        </p>
                        <p>
                          {' '}
                          <BiCheck size={17} style={{ color: 'green' }} /> Liced
                          Banana on Top
                        </p>
                      </div>
                      <div className="price">
                        <h2>{item.price}</h2>
                      </div>
                      <div className={styles.order}>
                        <button>Order Now</button>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Favorite
