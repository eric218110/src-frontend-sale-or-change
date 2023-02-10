import { ErrorModel } from '@domain/models/error.model'
import { NegotiationModel } from '@domain/models/negotiations'

export type AddNegotiation = {
  onAddNegotiation: (
    props: AddNegotiation.Props
  ) => Promise<AddNegotiation.Response>
}

export namespace AddNegotiation {
  export type Response = {
    data?: NegotiationModel
    error?: ErrorModel
  }
  export type Props = NegotiationModel
}
