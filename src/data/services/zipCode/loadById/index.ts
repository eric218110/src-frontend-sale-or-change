import { MethodHttpGetAdapter } from '@data/protocols/adapter/http/get'
import { FacadeEnviroments } from '@domain/facade/enviroments'
import { FacadeUrl } from '@domain/facade/url'
import { LoadZipCodeById } from '@domain/useCases/zipCode/load/byId'

export class LoadZipCodeByIdService implements LoadZipCodeById {
  constructor(
    private readonly facadeUrl: FacadeUrl,
    private readonly methodHttpGetAdapter: MethodHttpGetAdapter,
    private readonly facadeEnviroments: FacadeEnviroments
  ) {}

  public async onLoadZipCodeById(
    zipCode: number
  ): Promise<LoadZipCodeById.Response> {
    try {
      const baseUrl =
        this.facadeEnviroments.loadEnviromentByKey('VITE_URL_CEP_API')

      const url = this.facadeUrl.normalizeUrlByParams(
        `${baseUrl}/ws/${zipCode}/json`,
        { zipCode },
        true
      )

      const { data } =
        await this.methodHttpGetAdapter.get<LoadZipCodeById.Response>({ url })

      if (data) {
        return {
          data
        }
      }

      return {
        error: {
          message: 'Error on load zipCode informations empty or not found',
          status: 'fetch error',
          type: 'alert'
        }
      }
    } catch (error) {
      return {
        error: {
          message: 'Error on load zipCode informations',
          status: 'fetch error',
          type: 'error'
        }
      }
    }
  }
}
