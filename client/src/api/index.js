import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const addProduct = payload => api.post(`/product`, payload)
export const getAllProducts = () => api.get(`/products`)

export const updateProductById = (id, payload) => api.put(`/product/${id}`, payload)

export const deleteProductById = id => api.delete(`/movie/${id}`)
export const getProductById = id => api.get(`/movie/${id}`)

const apis = {
    addProduct,
    getAllProducts,
    updateProductById,
    deleteProductById,
    getProductById,
}

export default apis


