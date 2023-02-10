import { FacadeEnviroments } from '@domain/facade/enviroments'

export class EnviromentsFacade implements FacadeEnviroments {
  public loadEnviromentByKey(key: string) {
    return import.meta.env[key] || ''
  }
}
