import Axios from 'axios'

export default class ProductsAPI {
  static async getProducts (form={}) {
    try {
      const resp = await Axios.get('/products',{
        params: form
      })
      return resp.data
    } catch (e) {
      return console.error(e)
    }
  }
  static async getProduct (form={}) {
    try {
      const resp = await Axios.get('/product',{
        params: form
      })
      return resp.data
    } catch (e) {
      return console.error(e)
    }
  }
  static async getTreeOfProducts () {
    try {
      const resp = await Axios.get('/products/tree')
      return resp.data
    } catch (e) {
      return console.error(e)
    }
  }
  static async getChartOfProduct (form={}) {
    try {
      const resp = await Axios.get('/product/chart',{
        params: form
      })
      return resp.data
    } catch (e) {
      return console.error(e)
    }
  }
  static async getChartOfProduct (form={}) {
    try {
      const resp = await Axios.get('/product/chart',{
        params: form
      })
      return resp.data
    } catch (e) {
      return console.error(e)
    }
  }
  static async getOptionsOfProduct (form={}) {
    try {
      const resp = await Axios.get('/product/options',{
        params: form
      })
      return resp.data
    } catch (e) {
      return console.error(e)
    }
  }
  static async buildNewProduct (obj={}) {
    try {
      const resp = await Axios.post('/product/options',obj)
      return resp.data
    } catch (e) {
      return console.error(e)
    }
  }
}