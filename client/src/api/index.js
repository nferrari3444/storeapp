import axios from 'axios'

export const url = 'http://localhost:3001/api'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const addProduct = payload => api.post(`/product`, payload)
export const getAllProducts = () => api.get(`/products`)

export const updateProductById = (id, payload) => api.put(`/product/${id}`, payload)

export const deleteProductById = id => api.delete(`/product/${id}`)
export const getProductById = id => api.get(`/product/${id}`)

const apis = {
    addProduct,
    getAllProducts,
    updateProductById,
    deleteProductById,
    getProductById,
}

export default apis


