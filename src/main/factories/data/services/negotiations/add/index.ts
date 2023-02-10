import { AddNegotiationsService } from '@data/services/negotiations/add'
import { AddNegotiation } from '@domain/useCases/negotiations/add'
import { makeFacadeUrl } from '@main/factories/data/facade/url'
import { makeAxiosPostAdapter } from '@main/factories/infra/adapters/axios/post'

export const makeLoadZipCodeByIdService = (): AddNegotiation =>
  new AddNegotiationsService(makeFacadeUrl(), makeAxiosPostAdapter())
