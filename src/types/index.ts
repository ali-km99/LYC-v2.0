export type Photo = {
  id: string
  url: string
  title: string
}

export type PhotoGroupBody = {
  id: string
  title: string
  courseInfo: string
  photos: Photo[]
}
