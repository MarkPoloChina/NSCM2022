import Axios from 'axios'

export default class AtomsAPI {
  static async getAtoms (form={}) {
    try {
      const resp = await Axios.get('/atoms',{
        params:form
      })
      return resp.data
    } catch (e) {
      return console.error(e)
    }
  }
  static async getTreeOfAtoms () {
    try {
      const resp = await Axios.get('/atoms/tree')
      return resp.data
    } catch (e) {
      return console.error(e)
    }
  }
}