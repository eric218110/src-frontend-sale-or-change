import { UrlFacade } from '@data/facade/url'
import { FacadeUrl } from '@domain/facade/url'
import { makeFacadeEnviroments } from '../enviroment'

export const makeFacadeUrl = (): FacadeUrl =>
  new UrlFacade(makeFacadeEnviroments())
