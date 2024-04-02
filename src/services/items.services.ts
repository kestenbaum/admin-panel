import axios from 'axios'
import { GetDataProps, IForm } from '../interface'

class WorksServices {
  private URL = 'https://kestenbaum-page-me-api.onrender.com/api/works'

  getWorks = async () => {
    try {
      const response = await axios.get<GetDataProps>(this.URL)
      return response.data?.data
    } catch (e: any) {
      console.error(e.message)
    }
  }

  postWork = async (formData: IForm) => {
    const { data } = await axios.post(this.URL, formData)
    return data
  }

  deleteWork = async (id: string) => {
    return await axios.delete(this.URL + `/${id}`)
  }

  updateWork = async (id: string) => {
    return await axios.patch(this.URL + `/${id}`)
  }
}

export const worksServices = new WorksServices()
