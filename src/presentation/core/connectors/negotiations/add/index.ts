import { AddNegotiation } from '@domain/useCases/negotiations/add'
import { makeLoadZipCodeByIdService } from '@main/factories/data/services/negotiations/add'
import { NegotiationConnectorType } from '@presentation/core/types/negotiations'

export const negotiationsConnector: NegotiationConnectorType = {
  onAddNegotiation: (props: AddNegotiation.Props) =>
    makeLoadZipCodeByIdService().onAddNegotiation(props)
}
