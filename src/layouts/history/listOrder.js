import styles from '../../layouts/history/ListOrder.module.css'
import bgHistory from '../../../assets/img/bg-history.png'
import pict from '../../../assets/img/food3.png'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { TiDeleteOutline } from 'react-icons/ti'
import Swal from 'sweetalert2'
import fandb2 from '../../../assets/img/fandb2.png'

const ListOrder = () => {

  const { data } = useSelector((state) => state.login)
  const [history, setHistory] = useState([])
  const [refetch, setRefetch] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    setLoading(true)
    const user_id = data.user_id
    axios({
      method: `GET`,
      url: `https://app-coffee-shop.herokuapp.com/api/v1/payment/${user_id}`,
      // url: `http://localhost:1102/api/v1/payment/${user_id}`,
      headers: {
        authorization: data.token
      }
    }).then((res) => {
      setHistory(res.data)
      setLoading(false)
    }).catch((err) => {
      setErrors(err.response.data)
      setLoading(false)
    })
  }, [refetch])

  //delete
  const handleDelete = (user_id, payment_id) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: 'DELETE',
          url: `https://app-coffee-shop.herokuapp.com/api/v1/payment/${user_id}/${payment_id}`,
          headers: {
            authorization: data.token,
          },
        })
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
      }
      setRefetch(!refetch)
    })
  }


  return loading ? <div className={styles.loadingBar}><span className={styles.loader}></span></div> : (
    <>
      <div className={styles.rowHistory}>
        <div className='container'>
          {!history?.data?.length ? <div className={styles.noOrder}>
            <Image src={fandb2} alt={fandb2} width={100} height={100} />
            <p>No orders</p>
            <p className={styles.noOrderHistory}>You dont have any orders in your history</p>
          </div> : <div className={styles.orderHistory}>
            <p>Lets see you have bought!</p>
          </div>}

          <div className={styles.wrapCard}>
            {history?.data?.map((item, index) => {
              return (
                <>
                  <div className={styles.cardOrder}>
                    <div className={styles.cover}>
                      <Image alt="pict" src={pict} style={{ borderRadius: '50px' }} />
                    </div>
                    <div className={styles.infoOrder}>
                      <p className={styles.nameProduct}>{item.product_name}</p>
                      <p>$ {item.total_price}</p>
                      <p>Delivered</p>
                    </div>
                    <div className={styles.actionDelete}>
                      <button onClick={() => handleDelete(item.user_id, item.payment_id)} className={styles.btnDelete}>
                        <TiDeleteOutline size={25} style={{ color: '#fff' }} />
                      </button>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
export default ListOrder
