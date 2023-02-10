import { NegotiationConnectorType } from '@presentation/core/types/negotiations'
import { ZipCodeConnectorType } from '@presentation/core/types/zipcode'

export type NegotiationsPageProps = {
  zipCodeService: ZipCodeConnectorType
  negotiationsService: NegotiationConnectorType
}

export type PreviewImageType = {
  name: string
  uri: string | ArrayBuffer | null
  file: File | null
}

export type FormDataCreateNegotiations = {
  type: string
  value: string
  description: string
  trade_for: string
  address: string
  city: string
  state: string
  zip_code: string
  urgency: string
  limit_date: string
}
