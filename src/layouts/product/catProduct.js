import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useSearchParams } from 'react-router-dom'
import { GetProduct } from '../../redux/actions/Product'
import { useRouter } from 'next/router'
import { GetCategory } from '../../redux/actions/Category'
import Link from 'next/link'
import styles from './CatProduct.module.css'
import Image from 'next/image'
import { FaSort } from 'react-icons/fa'

const Loading = () => {
  return <div className={styles.loadingBar}><span className={styles.loader}></span></div>
}

const CatProduct = () => {
  const dispatch = useDispatch()

  // const results = data.data.results
  // console.log(results, 'iininiiin')
  let router = useRouter()
  // const data = useSelector((state) => state.product)

  const [listProduct, setListProduct] = useState({
    data: {
      totalRow: 0,
      totalPage: 0,
      results: [],
    },
    loading: false
  })
  console.log(listProduct, 'yoyoyo')
  const [search, setSearch] = useState('')
  const [sortProduct, setSortProduct] = useState({ sortby: 'desc' })

  //pagination
  // const [params, setParams] = useSearchParams()
  // const [paginate, setPaginate] = useState({
  //   page: params.get('page') ?? 1,
  //   limit: 8,
  // })
  // let totalPage = Array(listProduct.totalPage).fill() ?? []

  // const handlePaginate = (page) => {
  //   setPaginate((prevState) => ({ ...prevState, page }))
  //   params.set('page', page)
  //   setParams(params)
  // }

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://app-coffee-shop.herokuapp.com/api/v1/product/?product_name=${search}&sortby=${sortProduct.sortby}`,
    })
      .then((res) => {
        setListProduct(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [sortProduct, search])

  useEffect(() => {
    dispatch(GetCategory())
  }, [])
  const dataCategory = useSelector((state) => state.category)

  // const [params, setParams] = useState({
  //   product_name:'',
  //   category:''
  // })

  return (
    <>
      <div className={styles.sectionProduct}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className={styles.sectionPromo}>
                <div className={styles.leftContent}>
                  <div className={styles.header}>
                    <p className={styles.titlePromo}>Promo Today</p>
                    <p className={styles.titleCoupon}>
                      Coupons will be updated every weeks.
                      <br /> Check them out!{' '}
                    </p>
                  </div>
                  <div className={styles.cardPromo}>
                    <div className={styles.mothersDay}>
                      <p className={styles.titleMothersDay}>
                        HAPPY MOTHERS DAY!
                      </p>
                      <p className={styles.contentPromo}>
                        Get one of our favorite
                        <br /> menu for free!
                      </p>
                    </div>
                    <div className={styles.morningPromo}>
                      <p className={styles.titleMorningPromo}>
                        Get a cup of coffee for free
                        <br /> on sunday morning
                      </p>
                      <p className={styles.timePromo}>Only at 7 to 9 AM</p>
                    </div>
                    <div className={styles.halloweenPromo}>
                      <p className={styles.titleHalloweenPromo}>
                        HAPPY HALLOWEEN
                      </p>
                      <p className={styles.contentHalloweenPromo}>
                        Do you like chicken wings? Get 1<br /> free only if you
                        buy pinky promise
                      </p>
                    </div>
                    <div className={styles.applyCoupon}>
                      <button>Apply Coupon</button>
                    </div>
                  </div>
                  <div className={styles.termsCondition}>
                    <div className={styles.point}>
                      <p className={styles.titleTerms}>Terms and Condition</p>
                      <p className={styles.listTerms}>
                        1. You can only apply 1 coupon per day{' '}
                      </p>
                      <p className={styles.listTerms}>2. It only for dine in</p>
                      <p className={styles.listTerms}>
                        3. Buy 1 get 1 only for new user
                      </p>
                      <p className={styles.listTerms}>
                        4. Should make member card to apply coupon
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className={styles.rightContent}>
                <div className={styles.header}>
                  {dataCategory?.results?.map((item) => {
                    return (
                      <>
                        <div key={item.category_id}>
                          <Link href="#">
                            <button
                              className={router.category_id == item.category_id}
                            >
                              {item.category_name}
                            </button>
                          </Link>
                        </div>
                      </>
                    )
                  })}
                </div>
                <div className={styles.filter}>
                  <div className={styles.filterLeft}>
                    <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>
                      Search result for: {search}{' '}
                    </span>
                  </div>
                  <div className={styles.filterRight}>
                    <input
                      style={{
                        color: '#000',
                        backgroundColor: '#fff',
                        borderRadius: '10px',
                        border: '1px solid lightgrey',
                        outline: 'none',
                        padding: '5px 10px',
                        fontSize: '0.9rem',
                      }}
                      type="text"
                      placeholder="Search for product"
                      onChange={(event) => setSearch(event.target.value)}
                    />
                    <div className={styles.sorting}>
                      <div
                        className="btn-group "
                        style={{ borderRadius: '5px' }}
                      >
                        <button
                          type="button"
                          // className="btnSort dropdown d-flex justify-content-between align-items-center gap-1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <FaSort />
                          sort
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end mt-2">
                          <li>
                            <button
                              className="dropdown-item"
                              type="button"
                              onClick={() =>
                                setSortProduct((prevState) => ({
                                  ...prevState,
                                  sortby: 'asc',
                                }))
                              }
                            >
                              A-Z
                            </button>
                          </li>
                          <div
                            style={{
                              width: '100%',
                              height: '1px',
                              backgroundColor: '#DEDEDE',
                              margin: '2px 0',
                            }}
                          />
                          <li>
                            <button
                              className="dropdown-item"
                              type="button"
                              onClick={() =>
                                setSortProduct((prevState) => ({
                                  ...prevState,
                                  sortby: 'desc',
                                }))
                              }
                            >
                              Z-A
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.listProductPage}>
                  {!listProduct?.data?.results.length ? <Loading /> : <>
                    {listProduct?.data?.results?.slice(0, 8).map((item) => {
                      return (
                        <>
                          <Link href={`/product/${item.product_id}`}>
                            <div key={item.product_id}>
                              <div className={styles.cardProduct}>
                                <div className="cover">
                                  <Image
                                    alt="cover"
                                    width={100}
                                    height={100}
                                    src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}/${item.cover}`}
                                  />
                                </div>
                                <div className={styles.name}>
                                  <p className={styles.nameProduct}>
                                    {item.product_name}
                                  </p>
                                </div>
                                <div className={styles.price}>
                                  <p className={styles.priceProduct}>
                                    {item.price}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </>
                      )
                    })}
                  </>}

                </div>
              </div>
            </div>
            {/* <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center mt-5 gap-2">
                {totalPage.map((item, index) => {
                  return (
                    <>
                      <li className="page-item page-item-link">
                        <a
                          className={` page-link ${
                            paginate.page === index + 1
                          }`}
                          onClick={() => handlePaginate(index + 1)}
                        >
                          {index + 1}
                        </a>
                      </li>
                    </>
                  )
                })}
              </ul>
            </nav> */}
          </div>
        </div>
      </div>
      {/* </div>
      </div> */}
    </>
  )
}
export default CatProduct
