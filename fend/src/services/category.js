import axios from 'axios'
import config from '../config'

export async function getCategories() {
  
  const token = sessionStorage.getItem('token')

  const response = await axios.get(`${config.url}/category`, {
    headers: {
      token,
    },
  })
  return response.data
}
