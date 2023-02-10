import { AddNegotiation } from '@domain/useCases/negotiations/add'

export type NegotiationConnectorType = {
  onAddNegotiation: (
    props: AddNegotiation.Props
  ) => Promise<AddNegotiation.Response>
}
