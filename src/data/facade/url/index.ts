import { FacadeEnviroments } from '@domain/facade/enviroments'
import { FacadeUrl } from '@domain/facade/url'

export class UrlFacade implements FacadeUrl {
  constructor(private readonly facadeEnviroments: FacadeEnviroments) {}

  public loadDefaultUrl(): string {
    return this.facadeEnviroments.loadEnviromentByKey('baseUrl')
  }

  public normalizeUrlByParams(
    endPoint: string,
    params: Record<string, string | number>,
    dontUseDefaultUrl?: boolean
  ) {
    const endPoints = endPoint.replace(/\${/g, '').replace(/\}/g, '').split('/')
    const endPointNormalize = endPoints.map(url => params[url] || url).join('/')

    if (dontUseDefaultUrl) {
      return endPointNormalize
    }

    return `${this.loadDefaultUrl()}/${endPointNormalize}`
  }
}
