interface Work {
  _id?: string
  title: string
  link: string
  img?: string | null | ArrayBuffer
  category: string
}

type WorksResponse = {
  data: Work[]
  status: number
}
