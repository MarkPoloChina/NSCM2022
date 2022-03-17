// This is the config of API.
import Axios from 'axios'
const baseURL = 'http://nicklorry.top:8091/bdp/api/ppos'
Axios.defaults.baseURL=baseURL

export default {
  baseURL
}