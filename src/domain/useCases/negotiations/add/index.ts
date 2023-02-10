import { ErrorModel } from '@domain/models/error.model'
import {
  AddNegotiationForm,
  NegotiationModel
} from '@domain/models/negotiations'

export type AddNegotiation = {
  onAddNegotiation: (zipCode: number) => Promise<AddNegotiation.Response>
}

export namespace AddNegotiation {
  export type Response = {
    data?: NegotiationModel
    error?: ErrorModel
  }
  export type Props = AddNegotiationForm
}
