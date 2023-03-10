import { LoadZipCodeByIdService } from '@data/services/zipCode/loadById'
import { LoadZipCodeById } from '@domain/useCases/zipCode/load/byId'
import { makeFacadeEnviroments } from '@main/factories/data/facade/enviroment'
import { makeFacadeUrl } from '@main/factories/data/facade/url'
import { makeAxiosGetAdapter } from '@main/factories/infra/adapters/axios/get'

export const makeLoadZipCodeByIdService = (): LoadZipCodeById =>
  new LoadZipCodeByIdService(
    makeFacadeUrl(),
    makeAxiosGetAdapter(),
    makeFacadeEnviroments()
  )
