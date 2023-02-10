import { PhotosModel } from './photo.model'

export type NegotiationModel = {
  type: string
  value: string
  description: string
  trade_for: string
  location: {
    address: string
    city: string
    state: string
    lat: number
    lng: number
    zip_code: string
  }
  urgency: {
    type: string
    limit_date: string
  }
  photos: PhotosModel[]
}
