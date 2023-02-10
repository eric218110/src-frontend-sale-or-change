import { EnviromentsFacade } from '@data/facade/enviroments'
import { FacadeEnviroments } from '@domain/facade/enviroments'

export const makeFacadeEnviroments = (): FacadeEnviroments =>
  new EnviromentsFacade()
