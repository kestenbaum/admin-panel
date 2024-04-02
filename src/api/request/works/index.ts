import { api } from '../../instance'

export type GetWorksConfig = AxiosRequestConfig
export const getWorks = async (requestConfig?: GetWorksConfig) =>
  api.get<WorksResponse>('/works', requestConfig?.config)



export const postWorks = async () =>
  api.post<WorksResponse>('/works',)
