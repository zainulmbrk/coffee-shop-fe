import React, { useState } from 'react'
import axios from 'axios'
import styles from './Dashboard.module.css'
import { MdModeEdit } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { FaSort } from 'react-icons/fa'

const Admin = ({ products }) => {
  const results = products

  const [refetch, setRefetch] = useState('')

  const { data } = useSelector((state) => state.login)

  const [formAddData, setFormAddData] = useState({})
  const [formEditData, setFormEditData] = useState('')

  //add product
  const formData = new FormData()

  formData.append('cover', formAddData.cover || formEditData.cover)
  formData.append(
    'product_name',
    formAddData.product_name || formEditData.product_name,
  )
  formData.append(
    'category_id',
    formAddData.category_id || formEditData.category_id,
  )
  formData.append('price', formAddData.price || formEditData.price)
  formData.append(
    'product_description',
    formAddData.product_description || formEditData.product_description,
  )

  const handleAddProduct = async (event) => {
    event.preventDefault()
    try {
      const results = await axios({
        method: 'POST',
        url: `https://app-coffee-shop.herokuapp.com/api/v1/product`,
        data: formData,
        headers: {
          authorization: data.token,
          'Content-Type': 'multipart/form-data',
        },
      })

      if (results) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Add Product Success',
          showConfirmButton: false,
          timer: 1500,
          // width: '20em',
          height: '5em',
        })
        setRefetch(!refetch)
      }


    } catch (error) {
      alert(error)
    }
  }


  const handleDelete = (product_id) => {
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
          url: `https://app-coffee-shop.herokuapp.com/api/v1/product/${product_id}`,
          headers: {
            authorization: data.token,
          },
        })
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
        setRefetch(!refetch)
      }
    })
  }

  //edit product
  const handleEditProduct = (previousData) => {
    setFormEditData({
      ...previousData,
    })
  }

  const handleUpdateProduct = async (product_id) => {
    // event.preventDefault()
    try {
      const results = await axios({
        method: 'PATCH',
        url: `https://app-coffee-shop.herokuapp.com/api/v1/product/${product_id}`,
        data: formData,
        headers: {
          authorization: data.token,
          'Content-Type': 'multipart/form-data',
        },
      })
      if (results) {
        alert('Update Product Succes')
        setRefetch(!refetch)
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className={`${styles.dashboard} container`}>
      <div className="row">
        <div className="flex-column mt-5">
          <div className="d-flex justify-content-between header-action">
            {/* <div className="d-flex align-items-center gap-2 filter-action">
              <input placeholder="search product name"></input>
              <FaSort />
            </div> */}
            <div className="add-action">
              <button
                type="button"
                className={styles.btnAdd}
                data-bs-toggle="modal"
                data-bs-target="#addProduct"
              >
                Add Product
              </button>
            </div>
          </div>
          <table className="table mt-2">
            <thead
              className="table"
              style={{ backgroundColor: '#FFBA33', color: '#6A4029' }}
            >
              <tr className={styles.tHead}>
                <th scope="col">Product ID</th>
                <th scope="col">Product Name</th>
                <th scope="col">Category ID</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {results?.data?.results?.map((product, index) => {
              return (
                <>
                  <tbody>
                    <tr key={index}>
                      <th style={{ textAlign: 'center' }} scope="row">
                        {product.product_id}
                      </th>
                      <td style={{ textAlign: 'center' }}>
                        {product.product_name}
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        {product.category_id}
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        {product.category_name}
                      </td>
                      <td style={{ textAlign: 'center' }}>{product.price}</td>
                      <td style={{ textAlign: 'center' }}>
                        {product.product_description}
                      </td>
                      <td className="d-flex justify-content-center gap-2">
                        <button
                          type="button"
                          className={styles.btnEdit}
                          title="edit product"
                          data-bs-toggle="modal"
                          data-bs-target="#editProduct"
                          onClick={() => handleEditProduct(product)}
                        >
                          <MdModeEdit />
                        </button>
                        <button
                          type="button"
                          className={styles.btnDelete}
                          title="delete product"
                          // value={product.product_id}
                          onClick={() => handleDelete(product.product_id)}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </>
              )
            })}
          </table>
        </div>
        {/* Modal Add Product */}
        <div
          className="modal fade"
          id="addProduct"
          // tabDashboard="-1"
          aria-labelledby="addProduct"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addProduct">
                  Add New Product
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form
                className="d-flex flex-column"
                // onSubmit={Product Name}
                encType="multipart/form-data"
                id="form-uploads"
              >
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="productName" className="form-label">
                      Product Name
                    </label>
                    <input
                      type={'product_name'}
                      className="form-control"
                      id="productName"
                      placeholder="type here"
                      onChange={(event) =>
                        setFormAddData((prevData) => ({
                          ...prevData,
                          product_name: event.target.value,
                        }))
                      }
                    />
                    <label htmlFor="category" className="form-label">
                      Category
                    </label>
                    <input
                      type={'category'}
                      className="form-control"
                      id="category"
                      placeholder="type here"
                      onChange={(event) =>
                        setFormAddData((prevData) => ({
                          ...prevData,
                          category_id: event.target.value,
                        }))
                      }
                    />
                    <label htmlFor="price" className="form-label">
                      Price
                    </label>
                    <input
                      type="price"
                      className="form-control"
                      id="price"
                      placeholder="type here"
                      onChange={(event) =>
                        setFormAddData((prevData) => ({
                          ...prevData,
                          price: event.target.value,
                        }))
                      }
                    />
                    <label htmlFor="productDescription" className="form-label">
                      Product Description
                    </label>
                    <input
                      type={'product_description'}
                      className="form-control"
                      id="productDescription"
                      placeholder="type here"
                      onChange={(event) =>
                        setFormAddData((prevData) => ({
                          ...prevData,
                          product_description: event.target.value,
                        }))
                      }
                    />
                    <label htmlFor="productCover" className="form-label">
                      Cover
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="productCover"
                      placeholder="type here"
                      onChange={(event) =>
                        setFormAddData((prevData) => ({
                          ...prevData,
                          cover: event.target.files[0],
                        }))
                      }
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="reset"
                    value="Reset"
                    className="btn btn-secondary rounded"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary rounded"
                    data-bs-dismiss="modal"
                    onClick={(event) => handleAddProduct(event)}
                  >
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* End Modal */}

        {/* Modal Edit Product */}
        <div
          className="modal fade"
          id="editProduct"
          // tabDashboard="-1"
          aria-labelledby="editProduct"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editProduct">
                  Update Product
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form
                className="d-flex flex-column"
                // onSubmit={Product Name}
                encType="multipart/form-data"
                id="form-uploads"
                onSubmit={() => handleUpdateProduct(formEditData.product_id)}
              >
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="productName" className="form-label">
                      Product Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productName"
                      placeholder="type here"
                      defaultValue={formEditData.product_name}
                      onChange={(event) =>
                        setFormEditData((prevData) => ({
                          ...prevData,
                          product_name: event.target.value,
                        }))
                      }
                    />
                    <label htmlFor="category" className="form-label">
                      Category
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="category"
                      placeholder="type here"
                      defaultValue={formEditData.category_id}
                      onChange={(event) =>
                        setFormEditData((prevData) => ({
                          ...prevData,
                          category_id: event.target.value,
                        }))
                      }
                    />
                    <label htmlFor="price" className="form-label">
                      Price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="price"
                      placeholder="type here"
                      defaultValue={formEditData.price}
                      onChange={(event) =>
                        setFormEditData((prevData) => ({
                          ...prevData,
                          price: event.target.value,
                        }))
                      }
                    />
                    <label htmlFor="productDescription" className="form-label">
                      Product Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productDescription"
                      placeholder="type here"
                      defaultValue={formEditData.product_description}
                      onChange={(event) =>
                        setFormEditData((prevData) => ({
                          ...prevData,
                          product_description: event.target.value,
                        }))
                      }
                    />
                    <label htmlFor="productCover" className="form-label">
                      Cover
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="productCover"
                      placeholder="choose file"
                      onChange={(event) =>
                        setFormEditData((prevData) => ({
                          ...prevData,
                          cover: event.target.files[0],
                        }))
                      }
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="reset"
                    value="Reset"
                    className="btn btn-secondary rounded"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary rounded"
                    onClick={() => handleUpdateProduct(formEditData.product_id)}
                  >
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* End Modal */}
      </div>
    </div>
  )
}

export default Admin
