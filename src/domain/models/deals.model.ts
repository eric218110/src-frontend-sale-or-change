import { PhotosModel } from './photo.model'

export type DealType = 'Venda' | 'Troca' | 'Desejo'
export type DealUrgency = 'Baixa' | 'Média' | 'Alta' | 'Data'

export type DealModel = {
  type: DealType
  value: number
  description: string
  trade_for: string
  location: {
    lat: string
    lng: string
    address: string
    city: string
    state: string
    zip_code: number
  }
  urgency: {
    type: DealUrgency
    limit_date: Date
  }
  photos: PhotosModel[]
}
